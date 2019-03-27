import * as express from 'express';
import * as passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt, StrategyOptions, VerifiedCallback } from 'passport-jwt';
import { User } from '../api/v1/user/user.model';


class PassportConfig {

  private static _instance: PassportConfig;

  private constructor() {
  }

  static get instance(): PassportConfig {
    if (!this._instance) {
      this._instance = new PassportConfig();
    }

    return this._instance;
  }

  init(app: express.Application): void {
    const options: StrategyOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
      secretOrKey: process.env.SECRET,
    };

    passport.use(new JwtStrategy(options, function (payload, done: VerifiedCallback) {
      User.findOne({id: payload.id}, function (err, user) {
        if (err) {
          return done(err, false);
        }

        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    }));

    app.use(passport.initialize());
  }
}

const PassportConfigInstance = PassportConfig.instance;

export { PassportConfigInstance as PassportConfig };
