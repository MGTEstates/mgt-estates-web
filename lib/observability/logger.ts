type LogLevel = 'info' | 'warn' | 'error';

type LogContext = {
  correlationId: string;
  event: string;
  stage?: string;
  [key: string]: unknown;
};

function writeLog(level: LogLevel, context: LogContext) {
  const payload = {
    timestamp: new Date().toISOString(),
    level,
    ...context,
  };

  if (level === 'error') {
    console.error(payload);
    return;
  }

  if (level === 'warn') {
    console.warn(payload);
    return;
  }

  console.log(payload);
}

export function logInfo(context: LogContext) {
  writeLog('info', context);
}

export function logWarn(context: LogContext) {
  writeLog('warn', context);
}

export function logError(context: LogContext) {
  writeLog('error', context);
}
