const fs = require('fs');
const path = require('path');

const User = require('../dataBase/User');
const {writeUser, getUsers} = require("../servises/user-servise");
const ErrorHandler = require('../errors/errorHandler')

module.exports = {
    getSingleUsers: async (req, res, next) => {
        try {
            res.json(req.user);
        } catch (e) {
            next(e);
        }
    },
    createUser: async (req, res, next) => {
        // try {
        //     const { name, password } = req.body;
        //
        //      const userFind = users.findIndex((value) => value.name === name);
        //
        //     if (userFind !== -1) {
        //         res.json('Такий мейл вже є');
        //         return;
        //     }
        //
        //     users.push({ name, password });
        //     await writeUser(users);
        //
        //     res.redirect('/registration');
        // } catch (e) {
        //     next(e);
        // }
        try {
            const createdUser = await User.create(req.body);
            res.json(createdUser)
        } catch (e){
            next(e);
        }


    },
    getAllUsers: async (req, res) => {
        res.json(users);
        // const allUser = await getUsers();
        // res.json(allUser)
    },
    deleteUser: async (req, res, next) => {
        try {
            const {user_id} = req.params;

            await User.deleteOne({_id: user_id});

            res.status(204).json(`User with id ${user_id} is deleted`);
        } catch (e) {
            next(e);
        }
    }
};
