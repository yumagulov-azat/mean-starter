import { Response } from 'express';
import { IErrorResponse, ISuccessResponse} from './response-service.models';
import { IErrorCode } from './response-service-error-codes';


export class ResponseService {
  private response: Response;

  constructor(response: Response) {
    this.response = response;
  }

  /**
   * Send error
   * @param error
   */
  public error(error: IErrorCode): void {

    const responseBody: IErrorResponse = {
      success: false,
      error: {
        type: error.type,
        message: error.message,
        details: error.details || null
      }
    };

    this.response
      .status(error.status)
      .json(responseBody);
  }

  /**
   * Send success
   * @param data
   * @param status
   */
  public success(data: any, status: number = 200): void {
    const responseBody: ISuccessResponse = {
      success: true,
      data: data
    };

    this.response
      .status(status)
      .json(responseBody);
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
