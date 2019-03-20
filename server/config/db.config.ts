import * as mongoose from 'mongoose';


/**
 * Singleton db connect class
 */
class DBConfig {

  private static _instance: DBConfig;

  private constructor() {
  }

  static get instance(): DBConfig {
    if (!this._instance) {
      this._instance = new DBConfig();
    }

    return this._instance;
  }


  init(): void {
    const mongodbURI: string = process.env.MONGODB_URI;

    mongoose.connect(mongodbURI, {
      useNewUrlParser: true,
      useCreateIndex: true
    })
      .then(() => console.log('Connected to MongoDB'))
      .catch(err => console.error(err));
  }
}

const DbInstance = DBConfig.instance;

export { DbInstance as DBConfig };
