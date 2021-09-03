const fs = require('fs');
const path = require('path');

const users = require('../db/users');
const {writeUser, getUsers} = require("../servises/user-servise");

module.exports = {
    getSingleUsers: (req, res) => {
        try {
            const { user_id } = req.params;
            const user = users[user_id];

            if (!user) {
                res.status(404).json('User not fund');
                return;
            }
            res.json(user);
        } catch (e) {

        }

    },
    createUser: async (req, res) => {
        const { name, password } = req.body;
        console.log(name);

        users.find((value) => {
            if (value.name === name) {
                res.json('Такий мейл вже є');
            }
        });

        users.push({ name, password });
        await writeUser(users);

         res.redirect('/registration');
    },
    getAllUsers: async (req, res) => {
         res.json(users);
    }
};
