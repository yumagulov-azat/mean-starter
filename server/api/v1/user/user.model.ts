import * as mongoose from 'mongoose';
import { Schema, Model } from 'mongoose';
import { NextFunction } from 'express';
import { CryptWrapper } from '../core/services/security/crypt-wrapper';


export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;

  comparePassword(password: string, callback: Function): any;
}


const UserSchema: Schema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  }
});


/**
 * Generate hash
 */
UserSchema.pre<IUser>('save', function (next: NextFunction) {
  const user: IUser = this;

  if (user.isModified('password') || user.isNew) {
    CryptWrapper
      .saltHash(user.password)
      .then((hash: string) => {
        user.password = hash;
        next();
      })
      .catch((err) => {
        next(err);
      });
  } else {
    return next();
  }
});


/**
 * Verify password
 * @param password
 * @param callback
 */
(UserSchema.methods as IUser).comparePassword = function (password, callback) {
  console.log(password, this.password)
  CryptWrapper
    .comparePassword(password, this.password)
    .then((res: boolean) => {
      console.log(res)
      callback(null, res);
    })
    .catch((err) => {
      console.log(err)
      callback(err);
    });
};


const User: Model<IUser> = mongoose.model('User', UserSchema);

export { User };
