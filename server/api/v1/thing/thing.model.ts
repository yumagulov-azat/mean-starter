import * as mongoose from 'mongoose';
import { Model, Schema } from 'mongoose';

export interface IThing extends mongoose.Document {
  name: string;
}

const ThingSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Thing: Model<IThing> = mongoose.model('Thing', ThingSchema);

export { Thing };
