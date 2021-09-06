const router = require('express').Router();

const { userConttoller } = require('../controlles');
const { userMiddleware } = require('../middlewares');

router.get('/', userConttoller.getAllUsers);

router.post('/', userMiddleware.checkUniqueEmail, userConttoller.createUser);

router.get('/:user_id', userMiddleware.isUserPresent, userConttoller.getSingleUsers);

router.delete('/:user_id', userMiddleware.isUserPresent, userConttoller.deleteUser);

router.patch('/:user_id', userMiddleware.isUserPresent, userConttoller.updateUser);

module.exports = router;
