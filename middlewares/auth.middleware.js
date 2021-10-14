const { ErrorHandler } = require('../errors');
const { passwordService } = require('../servises');

const User = require('../dataBase/User');

module.exports = {
    isUserEmailPresent: async (req, res, next) => {
        try {
            const userByEmail = await User.findOne({ email: req.body.email }).select('+password');

            if (!userByEmail) {
                throw new ErrorHandler(409, 'Wrong email or password1');
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
            console.log(req.user.password);
            console.log(password);

            await passwordService.compare(password, hashPassword);

            next();
        } catch (e) {
            next(e);
        }
    }
};
