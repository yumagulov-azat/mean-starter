import * as mongoose from 'mongoose';
import { Model, Schema } from 'mongoose';

export interface IThing extends mongoose.Document {
  name: string;
  date: string;
}

const ThingSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});

const Thing: Model<IThing> = mongoose.model('Thing', ThingSchema);

export { Thing };
