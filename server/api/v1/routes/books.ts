import * as express from 'express';
import BookCtrl from '../controllers/book';

const booksRouter = express.Router();
const bokCtrl = new BookCtrl();

/**
 * Books routes
 */
booksRouter.route('/').get(bokCtrl.getAll);
booksRouter.route('/').post(bokCtrl.insert);
booksRouter.route('/:id').get(bokCtrl.get);
booksRouter.route('/:id').put(bokCtrl.update);
booksRouter.route('/:id').delete(bokCtrl.delete);

export default booksRouter;
