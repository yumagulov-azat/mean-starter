/**
 * Response status types
 */
export type ResponseStatus = 'SUCCESS' | 'ERROR';

export const ResponseStatus = {
  SUCCESS: 'SUCCESS' as ResponseStatus,
  ERROR: 'ERROR' as ResponseStatus
};

/**
 * Error types
 */
export type ResponseErrorType = 'VALIDATION' | 'COMMON';

export const ResponseErrorType = {
  VALIDATION: 'VALIDATION' as ResponseErrorType,
  COMMON: 'COMMON' as ResponseErrorType
};


/**
 * Response base
 */
export interface IResponse {
  status: ResponseStatus;
}


/**
 * Success response
 */
export interface ISuccessResponse extends IResponse {
  data: any;
}


/**
 * Error response
 */
export interface IResponseError {
  message: string;
  details?: any;
}


export interface IErrorResponse extends IResponse {
  type: ResponseErrorType;
  error: IResponseError;
}
