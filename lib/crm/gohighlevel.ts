import type {
  CRMContactInput,
  CRMCustomFieldValue,
  CRMOpportunityInput,
  CRMProvider,
  GHLContact,
  GHLOpportunity,
} from './provider';

interface GHLContactResponse {
  contact: GHLContact;
}

interface GHLOpportunityResponse {
  opportunity: GHLOpportunity;
}

interface GHLConfigCustomFieldIds {
  howCanIHelp: string | null;
  timeline: string | null;
  preferredArea: string | null;
  estimatedBudget: string | null;
  goals: string | null;
}

export interface GoHighLevelConfig {
  apiKey: string;
  apiBaseUrl: string;
  locationId: string;
  pipelineId: string;
  pipelineStageId: string;
  calendarId: string | null;
  tagIds: string[];
  workflowIds: string[];
  customFieldIds: GHLConfigCustomFieldIds;
}

export interface CRMRetryConfig {
  maxRetries: number;
  baseDelayMs: number;
  maxDelayMs: number;
}

export class GHLRequestError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
    public readonly path: string,
    public readonly responseBody: string,
  ) {
    super(message);
    this.name = 'GHLRequestError';
  }
}

function parseCsvList(value: string | undefined): string[] {
  if (!value) {
    return [];
  }

  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function getRequiredEnv(name: string): string {
  const value = process.env[name];

  if (!value || !value.trim()) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value.trim();
}

function getOptionalEnv(name: string): string | null {
  const value = process.env[name];
  if (!value || !value.trim()) {
    return null;
  }

  return value.trim();
}

function parsePositiveIntEnv(name: string, fallback: number): number {
  const raw = process.env[name];
  if (!raw) {
    return fallback;
  }

  const parsed = Number.parseInt(raw, 10);
  if (Number.isNaN(parsed) || parsed < 0) {
    return fallback;
  }

  return parsed;
}

export function getGoHighLevelConfig(): GoHighLevelConfig {
  const apiBaseUrl = process.env.GHL_API_BASE_URL?.trim() || 'https://services.leadconnectorhq.com';

  return {
    apiKey: getRequiredEnv('GHL_API_KEY'),
    apiBaseUrl,
    locationId: getRequiredEnv('GHL_LOCATION_ID'),
    pipelineId: getRequiredEnv('GHL_PIPELINE_ID'),
    pipelineStageId: getRequiredEnv('GHL_PIPELINE_STAGE_ID'),
    calendarId: getOptionalEnv('GHL_CALENDAR_ID'),
    tagIds: parseCsvList(process.env.GHL_TAG_IDS),
    workflowIds: parseCsvList(process.env.GHL_WORKFLOW_IDS),
    customFieldIds: {
      howCanIHelp: getOptionalEnv('GHL_CF_HOW_CAN_I_HELP'),
      timeline: getOptionalEnv('GHL_CF_TIMELINE'),
      preferredArea: getOptionalEnv('GHL_CF_PREFERRED_AREA'),
      estimatedBudget: getOptionalEnv('GHL_CF_ESTIMATED_BUDGET'),
      goals: getOptionalEnv('GHL_CF_GOALS'),
    },
  };
}

export function getCRMRetryConfig(): CRMRetryConfig {
  return {
    maxRetries: parsePositiveIntEnv('CRM_RETRY_MAX_RETRIES', 2),
    baseDelayMs: parsePositiveIntEnv('CRM_RETRY_BASE_DELAY_MS', 250),
    maxDelayMs: parsePositiveIntEnv('CRM_RETRY_MAX_DELAY_MS', 2000),
  };
}

export function isRetryableGhlError(error: unknown): boolean {
  if (!(error instanceof GHLRequestError)) {
    return false;
  }

  if (error.statusCode === 429) {
    return true;
  }

  return error.statusCode >= 500 && error.statusCode <= 599;
}

export class GoHighLevelProvider implements CRMProvider {
  constructor(private readonly config: GoHighLevelConfig) {}

  private async request<T>(path: string, init: RequestInit): Promise<T> {
    const response = await fetch(`${this.config.apiBaseUrl}${path}`, {
      ...init,
      headers: {
        Authorization: `Bearer ${this.config.apiKey}`,
        Version: '2021-07-28',
        'Content-Type': 'application/json',
        ...(init.headers || {}),
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      const text = await response.text();
      throw new GHLRequestError(
        `GHL request failed (${response.status}) on ${path}`,
        response.status,
        path,
        text,
      );
    }

    const rawText = await response.text();
    if (!rawText.trim()) {
      return {} as T;
    }

    return JSON.parse(rawText) as T;
  }

  async createOrUpdateContact(input: CRMContactInput): Promise<GHLContact> {
    const body = {
      locationId: input.locationId,
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      phone: input.phone,
      source: input.source,
      customFields: input.customFields,
    };

    const result = await this.request<GHLContactResponse>('/contacts/upsert', {
      method: 'POST',
      body: JSON.stringify(body),
    });

    return result.contact;
  }

  async updateCustomFields(contactId: string, fields: CRMCustomFieldValue[]): Promise<GHLContact> {
    if (fields.length === 0) {
      const result = await this.request<GHLContactResponse>(`/contacts/${contactId}`, {
        method: 'GET',
      });

      return result.contact;
    }

    const result = await this.request<GHLContactResponse>(`/contacts/${contactId}`, {
      method: 'PUT',
      body: JSON.stringify({ customFields: fields }),
    });

    return result.contact;
  }

  async applyTags(contactId: string, tagIds: string[]): Promise<void> {
    if (tagIds.length === 0) {
      return;
    }

    await this.request(`/contacts/${contactId}/tags`, {
      method: 'POST',
      body: JSON.stringify({ tags: tagIds }),
    });
  }

  async createOpportunity(input: CRMOpportunityInput): Promise<GHLOpportunity> {
    const result = await this.request<GHLOpportunityResponse>('/opportunities/', {
      method: 'POST',
      body: JSON.stringify({
        locationId: input.locationId,
        contactId: input.contactId,
        name: input.title,
        pipelineId: input.pipelineId,
        pipelineStageId: input.pipelineStageId,
        status: input.status,
      }),
    });

    return result.opportunity;
  }

  async triggerWorkflow(contactId: string, workflowId: string): Promise<void> {
    await this.request('/workflows/trigger', {
      method: 'POST',
      body: JSON.stringify({
        contactId,
        workflowId,
      }),
    });
  }
}
