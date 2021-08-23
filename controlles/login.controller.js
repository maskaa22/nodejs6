const users = require('../db/users');

module.exports = {
    login: (req, res) => {
        const {
            name, password
        } = req.body;

        // eslint-disable-next-line array-callback-return
        users.find((value, index) => {
            if (value.name === name && value.password === password) {
                res.redirect(`/users/${index}`);
            }
        });
        res.redirect('/registration');
    },
    postLogin: (req, res) => {
        res.json('Post login');
    }
};
