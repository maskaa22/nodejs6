const { passwordService } = require('../servises');
const { userUtil: { userNormalizator } } = require('../utils');

module.exports = {
    login: (req, res, next) => {
        try {
            const { user } = req;

            res.json(user);
        } catch (e) {
            next(e);
        }
    },
    logout: async (req, res, next) => {
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
