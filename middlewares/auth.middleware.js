const { ErrorHandler } = require('../errors');

const User = require('../dataBase/User');

module.exports = {
    isUserEmailPresent: async (req, res, next) => {
        try {
            const { email } = req.body;

            const userByEmail = await User.findOne({ email });

            if (!userByEmail) {
                throw new ErrorHandler(409, 'Wrong email or password');
            }

            next();
        } catch (e) {
            next(e);
        }
    },
    isUserPasswordPresent: async (req, res, next) => {
        try {
            const { password } = req.body;

            const userByPassword = await User.findOne({ password });

            if (!userByPassword) {
                throw new ErrorHandler(409, 'Wrong email or password');
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
