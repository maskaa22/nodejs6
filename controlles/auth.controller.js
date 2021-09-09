// const { passwordService } = require('../services');
const { userNormalizer } = require('../utils/user.util');
const User = require('../dataBase/User');
const service = require('../servises');

module.exports = {
    getUserLogin: (req, res, next) => {
        try {
            res.json('Go to /users');
        } catch (e) {
            next(e);
        }
    },

    // eslint-disable-next-line require-await
    postUserLogin: (req, res, next) => {
        try {
            // const { user, password } = req.body;
            //
            // const login = await service.userServise.findOneUser(User, user);
            //
            // res.json(login);
            res.json('11111');
        } catch (e) {
            next(e);
        }
    }
};
