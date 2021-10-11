const { passwordService } = require('../servises');
const { userUtil: { userNormalizator } } = require('../utils');

module.exports = {
    getUserLogin: (req, res, next) => {
        try {
            res.json('Go to /users');
        } catch (e) {
            next(e);
        }
    },
    postUserLogin: async (req, res, next) => {
        try {
            const { password } = req.body;

            await passwordService.compare(req.user.password, password);

            const userToReturn = userNormalizator(req.user);

            res.json(userToReturn);
        } catch (e) {
            next(e);
        }
    }
};
