import { Response } from 'express';
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


export class ResponseService {
  private response: Response;

  constructor(response: Response) {
    this.response = response;
  }

  /**
   * Send success
   * @param type
   * @param message
   * @param details
   */
  public error(message?: string = 'Common Error', details?: any = null, type: ResponseErrorType = ResponseErrorType.COMMON): void {

    const responseBody: IErrorResponse = {
      status: ResponseStatus.ERROR,
      type: type,
      error: {
        message: message,
        details: details
      }
    };

    this.response.json(responseBody);
  }

  /**
   * Send error
   * @param data
   */
  public success(data: any): void {
    const responseBody: ISuccessResponse = {
      status: ResponseStatus.SUCCESS,
      data: data
    };

    this.response.json(responseBody);
  }

  /**
   * Set status
   * @param code
   */
  public status(code: number) {
    this.response.status(code);
    return this;
  }

  /**
   * Send only status
   * @param res
   * @param code
   */
  public sendStatus(code: number): void {
    this.response.sendStatus(code);
  }
}
