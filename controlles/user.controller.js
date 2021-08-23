const fs = require('fs/promises');
const path = require('path');

const users = require("../db/users");

module.exports = {
    getSingleUsers: (req, res) => {
        const {user_id} = req.params;
        const user = users[user_id];

        if (!user) {
            res.status(404).json('User not fund');
            return;
        }
        res.json(user)
    },
    setnewUser: (req, res) => {
        const {name, password} = req.body;

        users.find(value => {
            if (value.name === name) {
                res.json('Такий мейл вже є');
                return;
            }
        })

        users.push({name, password});

        const dbPath = path.join(__dirname, 'db', 'users.js');
        const userTextForDb = `module.exports = \n${JSON.stringify(users)}`;

        fs.writeFile(dbPath, userTextForDb, err => {
            if (err) {
                console.log(err);
            }
        });
        res.redirect('/login');
    },
    getAllUsers: (req, res) => {
        res.json(db)
    }
}