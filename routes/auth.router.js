const router = require('express').Router();

const { authController } = require('../controlles');
const { authMiddleware: { isUserEmailPresent, isUserPasswordPresent } } = require('../middlewares');

router.post('/', isUserEmailPresent, isUserPasswordPresent, authController.login);

router.post('/logout', isUserEmailPresent, authController.logout);

module.exports = router;
