const router = require('express').Router();

const { userConttoller } = require('../controlles');

router.get('/', userConttoller.getAllUsers);

router.post('/', userConttoller.createUser);

router.get('/:user_id', userConttoller.getSingleUsers);

module.exports = router;
