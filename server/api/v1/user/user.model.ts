import * as mongoose from 'mongoose';
import { Schema, Model } from 'mongoose';
import * as bcrypt from 'bcrypt-nodejs';


export interface IUser extends mongoose.Document {
  email: string;
  password: string;
  comparePassword(password: string, cg: Function): any;
}


const UserSchema: Schema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

/**
 * Generate hash
 */
UserSchema.pre<IUser>('save', function (next) {
  const user = this;

  if (user.isModified('password') || user.isNew) {
    bcrypt.genSalt(10, function (saltErr, salt) {
      if (saltErr) {
        return next(saltErr);
      }
      bcrypt.hash(user.password, salt, null, function (hashErr, hash) {
        if (hashErr) {
          return next(hashErr);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

/**
 * Verify password
 * @param password
 * @param cb
 */
UserSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};


const User: Model<IUser> = mongoose.model('User', UserSchema);

export { User };
