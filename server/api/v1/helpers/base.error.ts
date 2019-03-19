export interface IJsonError {
  status: boolean;
  error: any;
}
export class BaseError {
  static generate(status: boolean, error: any): IJsonError {
    return {
      status: status,
      error: error
    };
  }
}
