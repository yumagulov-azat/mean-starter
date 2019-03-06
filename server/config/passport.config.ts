import * as express from 'express';
import * as passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import { User } from '../api/v1/user/user.model';

export class PassportConfig {

  static init(app: express.Application): void {
    const options: StrategyOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
      secretOrKey: process.env.SECRET,
    };

    passport.use(new JwtStrategy(options, function (payload, done) {
      User.findOne({id: payload.id}, function (err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      });
    }));

    app.use(passport.initialize());
  }
}
