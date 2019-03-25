export interface IErrorCode {
  status: number;
  type: string;
  message: string;
  details?: any;
}

interface IErrorCodes {
  [key: string]: IErrorCode;
}

export const ErrorCodes = {
  COMMON: {
    status: 400,
    type: 'COMMON_ERROR',
    message: 'Common error',
  },
  BAD_REQUEST: {
    status: 400,
    type: 'BAD_REQUEST_ERROR',
    message: 'Bad request',
  },
  VALIDATION: {
    status: 400,
    type: 'VALIDATION_ERROR',
    message: 'Validation error',
  },

  // Authorization errors
  UNAUTHORIZED: {
    status: 401,
    type: 'UNAUTHORIZED_ERROR',
    message: 'Authentication failed',
  },
  USER_ALREADY_EXIST: {
    status: 401,
    type: 'USER_ALREADY_EXIST_ERROR',
    message: 'User already exists',
  },
  USER_NOT_FOUND: {
    status: 401,
    type: 'USER_NOT_FOUND_ERROR',
    message: 'Authentication failed. User not found',
  },
  WRONG_PASSWORD: {
    status: 401,
    type: 'WRONG_PASSWORD_ERROR',
    message: 'Authentication failed. Wrong password',
  },

  // DB errors
  DB_DOCUMENT_NOT_FOUND: {
    status: 404,
    type: 'DB_DOCUMENT_NOT_FOUND_ERROR',
    message: 'Document not found',
  }
}
