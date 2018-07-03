abstract class BaseCtrl {

  abstract model: any;

  /**
   * Get all items
   * @param req
   * @param res
   */
  public getAll = (req, res) => {
    this.model.find({}, (err, docs) => {
      if (!this.checkErrors(res, err)) {
        res.status(200).json(docs);
      }
    });
  }

  /**
   * Insert new item
   * @param req
   * @param res
   */
  public insert = (req, res) => {
    const obj = new this.model(req.body);
    obj.save((err, item) => {
      if (!this.checkErrors(res, err)) {
        res.status(200).json(item);
      }
    });
  }

  /**
   * Get item by id
   * @param req
   * @param res
   */
  public get = (req, res) => {
    this.model.findOne({_id: req.params.id}, (err, item) => {
      if (!this.checkErrors(res, err)) {
        res.status(200).json(item);
      }
    });
  }

  /**
   * Update by id
   * @param req
   * @param res
   */
  public update = (req, res) => {
    console.log(req.params)
    this.model.findOneAndUpdate({_id: req.params.id}, req.body, (err) => {
      if (!this.checkErrors(res, err)) {
        res.sendStatus(200);
      }
    });
  }

  /**
   * Delete by id
   * @param req
   * @param res
   */
  public delete = (req, res) => {
    this.model.findOneAndRemove({_id: req.params.id}, (err) => {
      if (!this.checkErrors(res, err)) {
        res.sendStatus(200);
      }
    });
  }

  /**
   * Check errors
   * @param res
   * @param err
   * @returns {boolean}
   */
  private checkErrors(res, err) {
    if (err) {
      switch (err.name) {
        case 'ValidationError':
          res.status(400).json({error: 'Validation error'});
          break;
        default:
          res.status(400).json({error: 'Error'});
      }
      console.error(err)
      return true;
    } else {
      return false;
    }
  }
}


export default BaseCtrl;
