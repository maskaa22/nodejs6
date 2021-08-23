const fs = require('fs');
const path = require('path');

const users = require('../db/users');

module.exports = {
    getRegistration: (req, res) => {
        res.json('it is a registration form');
    },
    postRegistrarion: (req, res) => {
        const {
            name, password
        } = req.body;

        // eslint-disable-next-line array-callback-return
        users.find((value) => {
            if (value.name === name) {
                res.json('Такий мейл вже є');
            }
        });

        users.push({ name, password });

        const dbPath = path.join(__dirname, 'db', 'users.js');
        const userTextForDb = `module.exports = \n${JSON.stringify(users)}`;

        fs.writeFile(dbPath, userTextForDb, (err) => {
            if (err) {
                console.log(err);
            }
        });
        res.redirect('/login');
    }
};
