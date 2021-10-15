const { userUtil: { userNormalizator } } = require('../utils');
const { UserDB } = require('../dataBase');

module.exports = {
    login: (req, res, next) => {
        try {
            const { user } = req;

            const userToReturn = userNormalizator(user);

            res.json(userToReturn);
        } catch (e) {
            next(e);
        }
    },
    logout: async (req, res, next) => {
        try {
            const users = await UserDB.find();

            res.json(users);
        } catch (e) {
            next(e);
        }
    }
};
