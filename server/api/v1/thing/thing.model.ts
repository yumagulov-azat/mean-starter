import * as mongoose from 'mongoose';
import { Model } from 'mongoose';


const thingShecma = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Thing: Model<any> = mongoose.model('thing', thingShecma);

export default Thing;
