const router = require('express').Router();

const { userRolesEnumConfig: { ADMIN, USER } } = require('../config');
const { authController } = require('../controlles');
const { authMiddleware: { isUserEmailPresent, isUserPasswordPresent }, userMiddleware } = require('../middlewares');

router.post('/',
    isUserEmailPresent,
    userMiddleware.checkUserRole([
        ADMIN,
        USER
    ]),
    isUserPasswordPresent,
    authController.login);

router.post('/logout', isUserEmailPresent, authController.logout);

module.exports = router;
