import { Model } from 'mongoose';


export abstract class BaseController {

  abstract model: Model<any>;

  /**
   * Get all items
   * @param req
   * @param res
   */
  public getAll = (req, res) => {
    this.model.find({}, (err, docs) => {
      if (!this.checkMongoErrors(res, err)) {
        res.status(200).json(docs);
      }
    });
  }

  /**
   * Get item by id
   * @param req
   * @param res
   */
  public getById = (req, res) => {
    this.model.findById(req.params.id, (err, doc) => {
      if (!this.checkMongoErrors(res, err)) {
        res.status(200).json(doc);
      }
    });
  }

  /**
   * Insert new item
   * @param req
   * @param res
   */
  public save = (req, res) => {
    const obj = new this.model(req.body);
    obj.save((err, item) => {
      if (!this.checkMongoErrors(res, err)) {
        res.status(201).json(item);
      }
    });
  }

  /**
   * Update by id
   * @param req
   * @param res
   */
  public updateById = (req, res) => {
    this.model.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, doc) => {
      if (!this.checkMongoErrors(res, err)) {
        res.status(200).json(doc);
      }
    });
  }

  /**
   * Delete by id
   * @param req
   * @param res
   */
  public deleteById = (req, res) => {
    this.model.findByIdAndDelete(req.params.id, (err, docs) => {
      if (!docs) {
        res.status(404).json({
          status: false,
          msg: 'Document not found'
        });
        return;
      } else {
        res.sendStatus(204);
      }
    });
  }

  /**
   * Check mongo errors
   * @param res
   * @param err
   * @returns {boolean}
   */
  public checkMongoErrors(res, err): boolean {
    if (err) {
      switch (err.name) {
        case 'ValidationError':
          res.status(400).json({status: false, error: 'Validation error'});
          break;
        default:
          res.status(400).json({status: false, error: 'Error'});
      }
      return true;
    } else {
      return false;
    }
  }
}
