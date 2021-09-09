const User = require('../dataBase/User');
const service = require('../servises');
const { userNormalizator } = require('../utils/user.util');

module.exports = {
    // eslint-disable-next-line require-await
    getSingleUsers: async (req, res, next) => {
        try {
            const userToReturn = userNormalizator(req.user);

            res.json(userToReturn);
        } catch (e) {
            next(e);
        }
    },
    createUser: async (req, res, next) => {
        try {
            const { password } = req.body;
            const hashedPassword = await service.passwordServise.hash(password);
            const createdUser = await service.userServise.createdUser(User, { ...req.body, password: hashedPassword });

            const userToReturn = userNormalizator(createdUser);

            res.json(userToReturn);
        } catch (e) {
            next(e);
        }
    },
    getAllUsers: async (req, res, next) => {
        try {
            const { allUsers } = req;
            const users = await service.userServise.findAllUser(User, allUsers);

            const usersToReturn = users.map((user) => userNormalizator(user));

            res.json(usersToReturn);
        } catch (e) {
            next(e);
        }
    },
    deleteUser: async (req, res, next) => {
        try {
            const { user_id } = req.params;

            await service.userServise.deleteOneUser(User, user_id);

            res.json(`User with id ${user_id} is deleted`);
        } catch (e) {
            next(e);
        }
    },
    updateUser: async (req, res, next) => {
        try {
            const { user_id } = req.params;
            const newUser = req.body;

           await service.userServise.updateUserById(User, user_id, newUser);

            res.json(`User with id ${user_id} is update`);
        } catch (e) {
            next(e);
        }
    }
};
