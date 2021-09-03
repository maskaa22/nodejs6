const User = require('../dataBase/User');
const userService = require('../servises/user-servise');

module.exports = {
    getSingleUsers: async (req, res, next) => {
        try {
            res.json(req.user);
        } catch (e) {
            next(e);
        }
    },
    createUser: async (req, res, next) => {
        try {
            const createdUser = await userService.createdUser(User, req.body);

            res.json(createdUser);
        } catch (e){
            next(e);
        }
    },
    getAllUsers: async (req, res, next) => {
        try {
            const { allUsers } = req;
            const users = await userService.findAllUser(User, allUsers);

            res.json(users);
        } catch (e) {
            next(e);
        }
    },
    deleteUser: async (req, res, next) => {
        try {
            const { user_id } = req.params;

            await userService.deleteOneUser(User, user_id);

            res.json(`User with id ${user_id} is deleted`);
        } catch (e) {
            next(e);
        }
    },
    updateUser: async (req, res, next) => {
        try {
            const { user_id } = req.params;
            const newUser = req.body;

            await userService.updateUserById(User, user_id, newUser);

            res.json(`User with id ${user_id} is update`);
        } catch (e) {
            next(e);
        }
    }
};
