const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const { variablesConfig: { PORT, MONGO_CONNECT_URL } } = require('./config');
const { userRouter, authRouter } = require('./routes');

const app = express();

mongoose.connect(MONGO_CONNECT_URL);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('*', _notFoundError);
app.use(_mainErrorHandler);

app.listen(PORT, () => {
    console.log('App lesten', PORT);
});

function _notFoundError(err, req, res, next) {
    next({
        status: err.status || 404,
        message: err.message || 'Not Found'
    });
}

// eslint-disable-next-line no-unused-vars
function _mainErrorHandler(err, req, res, next) {
    res
        .status(err.status || 500)
        .json({
            message: err.message
        });
}
