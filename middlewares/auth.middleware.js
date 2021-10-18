const { ErrorHandler } = require('../errors');
const { loginValidator } = require('../validators');
const { passwordServise } = require('../servises');
const { statusCode, messageCode } = require('../config');
const User = require('../dataBase/User');

module.exports = {
    isUserEmailPresent: async (req, res, next) => {
        try {
            const { email } = req.body;
            const userByEmail = await User.findOne({ email }).select('+password').lean();

            if (!userByEmail) {
                throw new ErrorHandler(statusCode.CONFLICT, messageCode.WRONG_LOGINING);
            }

            req.user = userByEmail;

            next();
        } catch (e) {
            next(e);
        }
    },
    isUserPasswordPresent: async (req, res, next) => {
        try {
            const { password } = req.body;
            const { password: hashPassword } = req.user;

            await passwordServise.compare(password, hashPassword);

            next();
        } catch (e) {
            next(e);
        }
    },
    validateLoginUser: (req, res, next) => {
        try {
            const { error } = loginValidator.loginUser.validate(req.body);

            if (error) {
                throw new ErrorHandler(400, error.details[0].message);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
