const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const User = require('./users').model;
const crypto = require('crypto');

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, 
    function (email, password, cb) {
        
        const hashedPassword = crypto.createHash('md5').update(password).digest('hex');
        
        return User.findOne({ 
          where: { email, password: hashedPassword },
          attributes: ['id', 'email', 'firstName', 'lastName']
        })
           .then(user => {
               if (!user) {
                   return cb(null, false, {message: 'Incorrect email or password.'});
               }
               return cb(null, user.get({ plain: true }), {message: 'Logged In Successfully'});
           })
           .catch(err => cb(err));
       }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromHeader('x-kicker-jwt'),
        secretOrKey   : 'your_jwt_secret'
    },
    function (jwtPayload, cb) {
        
        return User.findById(jwtPayload.id)
            .then(user => {
                return cb(null, user.get({ plain: true }));
            })
            .catch(err => {
                return cb(err);
            });
    }
));