const router = require('express').Router();

const {authController} = require('../controlles');

router.get('/', authController.loginUser);
router.post('/', authController.postLogin);

module.exports = router;