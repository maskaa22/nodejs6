const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');
const fs = require('fs');

const {PORT} = require('./config/variables');
const users = require('./db/users');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'hbs');
app.engine('.hbs', expressHbs({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.post('/login', (req, res) => {
    const {name, password} = req.body;

    users.find((value, index) => {
        if (value.name === name && value.password === password) {
            res.redirect('/users/' + index);
        }
    });
    res.redirect('/registretion');

});

app.get('/registretion', (req, res) => {
    res.render('registretion');
});

app.post('/registretion', (req, res) => {
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
});

app.get('/users', (req, res) => {
    res.render('users', {users})
});

app.get('/user', (req, res) => {
    res.render('user')
});

app.get('/users/:user_id', (req, res) => {
    const {user_id} = req.params;
    const currentUser = users[user_id];

    if (!currentUser) {
        res.status(404).end('User Not Found');
        return
    }
    res.render('user', {currentUser});
});

app.listen(PORT, () => {
    console.log('App lesten', PORT);
})