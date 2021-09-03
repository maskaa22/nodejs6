const fs = require('fs');
const path = require('path');

const users = require('../db/users');
const {writeUser, getUsers} = require("../servises/user-servise");
const ErrorHandler = require('../errors/errorHandler')

module.exports = {
    getSingleUsers: (req, res, next) => {
        try {
            const { user_id } = req.params;

            const user = users[user_id];

            if (!user) {
                // res.status(404).json('User not fund');
                // return;
                throw new ErrorHandler(418, 'user not found')
            }
            res.json(user);
        } catch (e) {
            next(e);
        }

    },
    createUser: async (req, res, next) => {
        try {
            const { name, password } = req.body;

             const userFind = users.findIndex((value) => value.name === name);

            if (userFind !== -1) {
                res.json('Такий мейл вже є');
                return;
            }

            users.push({ name, password });
            await writeUser(users);

            res.redirect('/registration');
        } catch (e) {
            next(e);
        }

    },
    getAllUsers: async (req, res) => {
         res.json(users);
       // const allUser = await getUsers();
       // res.json(allUser)
    }
};
