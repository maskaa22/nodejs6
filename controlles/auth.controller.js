const { OAuth } = require('../dataBase');
const { userUtil: { userNormalizator } } = require('../utils');
const { jwtServise, userServise } = require('../servises');
const { constants: { AUTHORIZATION }, messageCode } = require('../config');

module.exports = {
    login: async (req, res, next) => {
        try {
            const { user } = req;
            const tokenPair = jwtServise.generateTokenPair();

            const userToReturn = userNormalizator(user);

            await OAuth.create({
                ...tokenPair,
                user_id: userToReturn._id
            });

            res.json({
                user: userToReturn,
                ...tokenPair
            });
        } catch (e) {
            next(e);
        }
    },
    logout: async (req, res, next) => {
        try {
            const access_token = req.get(AUTHORIZATION);
            await userServise.deleteOneUser(OAuth, { access_token });

            res.json(messageCode.DELETED);
        } catch (e) {
            next(e);
        }
    },
    deleteAcount: (req, res, next) => {
        try {
            res.json('ok');
        } catch (e) {
            next(e);
        }
    }
};
