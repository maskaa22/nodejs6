const express = require('express');

const {PORT} = require('./config/variables');
const {userRouter, registrationRouter, authRouter} = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/registration', registrationRouter);

app.listen(PORT, () => {
    console.log('App lesten', PORT);
})