/**
 * Response base
 */
export interface IResponse {
  success: boolean;
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
export interface IErrorResponse extends IResponse {
  // error: IErrorResponseError;
  type: string;
  message: string;
  details?: any;
}

export interface IErrorResponseError {
  type: string;
  message: string;
  details?: any;
}
