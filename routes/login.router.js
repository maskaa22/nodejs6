const router = require('express').Router();

const { loginController } = require('../controlles');

router.get('/', loginController.login);

router.post('/', loginController.postLogin);

module.exports = router;
