import * as mongoose from 'mongoose';


const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 30,
  },
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
