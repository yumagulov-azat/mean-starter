import * as mongoose from 'mongoose';


const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 30,
  },
  pages: {
    type: Number,
    required: true,
    min: 0,
    max: 10000,
  },
  publisher: {
    type: String,
    minlength: 1,
    maxlength: 30
  },
  publicationDate: {
    type: Date,
    min: new Date(1800, 0, 1),
    max: new Date(),
  },
  releaseDate: {
    type: Date,
    min: new Date(1800, 0, 1),
    max: new Date(),
  },
  isbn: {
    type: String,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  created: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
