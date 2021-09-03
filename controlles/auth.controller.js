const users = require('../db/users');

module.exports = {
    loginUser: (req, res) => {

        try {
            const {name, password} = req.body;

            users.find((value, index) => {
                if (value.name === name && value.password === password) {
                    res.redirect(`/users/${index}`);

                }
            });
        } catch (e) {
            res.json(e);
        }

    },

    postLogin: (req, res) => {
        res.json('get. login form');
    }
};