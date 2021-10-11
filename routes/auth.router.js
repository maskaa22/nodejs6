const router = require('express').Router();

const { authController } = require('../controlles');
const { authMiddleware: { isUserEmailPresent, isUserPasswordPresent } } = require('../middlewares');

router.get('/', authController.getUserLogin);

router.post('/', isUserEmailPresent, isUserPasswordPresent, authController.postUserLogin);

module.exports = router;
