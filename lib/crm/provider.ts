export interface CRMCustomFieldValue {
  id: string;
  value: string;
}

export interface CRMContactInput {
  locationId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  source?: string;
  customFields?: CRMCustomFieldValue[];
}

export interface CRMOpportunityInput {
  locationId: string;
  contactId: string;
  title: string;
  pipelineId: string;
  pipelineStageId: string;
  status: 'open' | 'won' | 'lost' | 'abandoned' | 'all';
}

export interface CRMContact {
  id: string;
  locationId: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  source?: string;
}

export interface CRMOpportunity {
  id: string;
  locationId: string;
  contactId: string;
  pipelineId: string;
  pipelineStageId: string;
  status: 'open' | 'won' | 'lost' | 'abandoned' | 'all';
  name?: string;
}

export interface CRMProvider {
  createOrUpdateContact(input: CRMContactInput): Promise<CRMContact>;
  updateCustomFields(contactId: string, fields: CRMCustomFieldValue[]): Promise<CRMContact>;
  applyTags(contactId: string, tagIds: string[]): Promise<void>;
  createOpportunity(input: CRMOpportunityInput): Promise<CRMOpportunity>;
  triggerWorkflow(contactId: string, workflowId: string): Promise<void>;
}