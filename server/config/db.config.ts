import * as mongoose from 'mongoose';


export class DBConfig {

  static init(): void {
    const mongodbURI: string = process.env.MONGODB_URI;

    mongoose.connect(mongodbURI, {
      useNewUrlParser: true,
      useCreateIndex: true
    })
      .then(() => console.log('Connected to MongoDB'))
      .catch(err => console.error(err));
  }
}
