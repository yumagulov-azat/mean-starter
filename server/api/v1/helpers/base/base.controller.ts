import { Model } from 'mongoose';


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
  public getAll = (req, res) => {
    this.model.find({}, (err, docs) => {
      res.status(200).json(docs);
    });
  };

  /**
   * Get item by id
   * @param req
   * @param res
   */
  public getById = (req, res) => {
    this.model.findById(req.params.id, (err, doc) => {
      res.status(200).json(doc);
    });
  };

  /**
   * Insert new item
   * @param req
   * @param res
   */
  public save = (req, res) => {
    const obj = new this.model(req.body);
    obj.save((err, item) => {
      res.status(201).json(item);
    });
  };

  /**
   * Update by id
   * @param req
   * @param res
   */
  public updateById = (req, res) => {
    this.model.findOneAndUpdate(req.params.id, req.body, {new: true}, (err, doc) => {
      res.status(200).json(doc);
    });
  };


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
  };
}
