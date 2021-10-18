const router = require('express').Router();

const { authController } = require('../controlles');
const {
    authMiddleware: {
        isUserEmailPresent,
        isUserPasswordPresent,
        validateLoginUser
    }
} = require('../middlewares');

router.post('/',
    validateLoginUser,
    isUserEmailPresent,
    isUserPasswordPresent,
    authController.login);

router.post('/logout', isUserEmailPresent, authController.logout);

module.exports = router;
