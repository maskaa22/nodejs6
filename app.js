const express = require('express');

const {PORT} = require('./config/variables');
const {loginRouter, userRouter, registrationRouter} = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/login', loginRouter);
app.use('/users', userRouter);
app.use('/registration', registrationRouter);

app.listen(PORT, () => {
    console.log('App lesten', PORT);
})