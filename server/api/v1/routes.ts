// Routes
import booksRouter from './routes/books';

export default class Routes {
  static setRoutes(app) {
    app.use('/api/v1/books', booksRouter);
  }
}
