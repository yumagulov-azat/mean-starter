abstract class BaseCtrl {

  abstract model: any;

  /**
   * Get all items
   * @param req
   * @param res
   */
  getAll = (req, res) => {
    this.model.find({}, (err, docs) => {
      if (err) { return console.error(err); }
      res.status(200).json(docs);
    });
  }

  /**
   * Insert new item
   * @param req
   * @param res
   */
  insert = (req, res) => {
    const obj = new this.model(req.body);
    obj.save((err, item) => {
      if (err && err.code === 11000) {
        res.sendStatus(400);
      }
      if (err) {
        return console.error(err);
      }
      res.status(200).json(item);
    });
  }

  /**
   * Get item by id
   * @param req
   * @param res
   */
  get = (req, res) => {
    this.model.findOne({ _id: req.params.id }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  }

  /**
   * Update by id
   * @param req
   * @param res
   */
  update = (req, res) => {
    this.model.findOneAndUpdate({ _id: req.params.id }, req.body, (err) => {
      if (err) { return console.error(err); }
      res.sendStatus(200);
    });
  }

  /**
   * Delete by id
   * @param req
   * @param res
   */
  delete = (req, res) => {
    this.model.findOneAndRemove({ _id: req.params.id }, (err) => {
      if (err) { return console.error(err); }
      res.sendStatus(200);
    });
  }
}

export default BaseCtrl;
