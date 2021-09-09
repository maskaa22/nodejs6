const User = require('../dataBase/User');
const ErrorHandler = require('../errors/errorHandler');
const service = require('../servises');
const uservalidator = require('../validators/user.validator');

module.exports = {
    isUserPresent: async (req, res, next) => {
        try {
            const { user_id } = req.params;

            const user = await service.userServise.findUserById(User, user_id);

            if (!user) {
                throw new ErrorHandler(418, 'user not found');
            }
            req.user = user;

            next();
        } catch (e) {
            next(e);
        }
    },
    checkUniqueEmail: async (req, res, next) => {
        try {
            const { email } = req.body;

            const userByEmail = await User.findOne({ email });

            if (userByEmail) {
                throw new ErrorHandler(409, `Email ${email} is already exist`);
            }

            next();
        } catch (e) {
            next(e);
        }
    },
    validateUserBody: (req, res, next) => {
        try {
            const { error } = uservalidator.createUserValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(400, error.details[0].message);
            }

            next();
        } catch (e) {
            next(e);
        }
    },
    validateUpdateUser: (req, res, next) => {
        try {
            const { error } = uservalidator.updateUser.validate(req.body);

            if (error) {
                throw new ErrorHandler(400, error.details[0].message);
            }

            next();
        } catch (e) {
            next(e);
        }
    },
    validateUserForId: (req, res, next) => {
        try {
            const { error } = uservalidator.userValidatorForId.validate(req.body);

            if (error) {
                throw new ErrorHandler(400, error.details[0].message);
            }

            next();
        } catch (e) {
            next(e);
        }
    },
    validateUserAll: (req, res, next) => {
        try {
            const { error } = uservalidator.allUserValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(400, error.details[0].message);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
