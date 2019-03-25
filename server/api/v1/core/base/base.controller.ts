import { Model } from 'mongoose';
import { Request, Response } from 'express';
import { ResponseService } from '../services/response-service';
import { ErrorCodes } from '../services/response-service/response-service-error-codes';


export class BaseController {

  protected model: Model<any>;

  constructor(model: Model<any>) {
    this.model = model;
  }

  /**
   * Get all items
   * @param req
   * @param res
   */
  public getAll = (req: Request, res: Response): void => {
    this.model.find({}, (err, docs) => {
      new ResponseService(res)
        .success(docs);
    });
  };

  /**
   * Get item by id
   * @param req
   * @param res
   */
  public getById = (req: Request, res: Response): void => {
    this.model.findById(req.params.id, (err, doc) => {
      new ResponseService(res)
        .success(doc);
    });
  };

  /**
   * Insert new item
   * @param req
   * @param res
   */
  public save = (req: Request, res: Response): void => {
    const obj = new this.model(req.body);
    obj.save((err, doc) => {
      new ResponseService(res)
        .success(doc, 201);
    });
  };

  /**
   * Update by id
   * @param req
   * @param res
   */
  public updateById = (req: Request, res: Response): void => {
    this.model.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, doc) => {
      new ResponseService(res)
        .success(doc);
    });
  };


  /**
   * Delete by id
   * @param req
   * @param res
   */
  public deleteById = (req: Request, res: Response): void => {
    this.model.findByIdAndDelete(req.params.id, (err, docs) => {
      if (!docs) {
        new ResponseService(res)
          .error(ErrorCodes.DB_DOCUMENT_NOT_FOUND);
      } else {
        new ResponseService(res)
          .success(null, 204);
      }
    });
  };
}
