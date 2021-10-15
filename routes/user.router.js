const router = require('express').Router();

const { userConttoller } = require('../controlles');
const { userMiddleware } = require('../middlewares');

router.get('/', userMiddleware.validateUserAll, userConttoller.getAllUsers);

router.post('/', userMiddleware.validateUserBody, userMiddleware.checkUniqueEmail, userConttoller.createUser);

router.get('/:user_id',
    userMiddleware.validateUserForId,
    userMiddleware.isUserPresent,
    userConttoller.getSingleUsers);

router.delete('/:user_id',
    userMiddleware.validateUserForId,
    userMiddleware.isUserPresent,
    userConttoller.deleteUser);

router.patch('/:user_id',
    userMiddleware.validateUserForId,
    userMiddleware.validateUpdateUser,
    userMiddleware.isUserPresent,
    userConttoller.updateUser);

module.exports = router;
