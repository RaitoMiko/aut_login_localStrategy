const passport = require("passport");
const LocalStrategy = require("passport-local");
const { User } = require("../models");

// Bagian passport
passport.use(
  new LocalStrategy(
    async (pengguna, sandi, callback) => {
      // Bagian DB (sequelize)
      try {
        const user = await User.findOne({
          where: {
            username: pengguna,
            password: sandi,
          },
        });
  
        if (user) {
          callback(null, { pengguna: user, aaa: "test" });
        } else {
          callback(null, false);
        }
      } catch (err) {
        callback(err);
      }
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

module.exports = passport;
