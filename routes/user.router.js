const router = require('express').Router();

const { userConttoller } = require('../controlles');
const { userMiddleware } = require('../middlewares');
const { userRolesEnumConfig: { ADMIN } } = require('../config');

router.get('/', userConttoller.getAllUsers);

router.post('/', userMiddleware.validateUserBody, userMiddleware.checkUniqueEmail, userConttoller.createUser);

router.get('/:user_id',
    userMiddleware.isUserPresent,
    userConttoller.getSingleUsers);

router.delete('/:user_id',
    userMiddleware.isUserPresent,
    userMiddleware.checkUserRole([ADMIN]),
    userConttoller.deleteUser);

router.patch('/:user_id',
    userMiddleware.isUserPresent,
    userConttoller.updateUser);

module.exports = router;
