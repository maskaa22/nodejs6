const router = require('express').Router();

const { authController } = require('../controlles');
const { authMiddleware } = require('../middlewares');

router.get('/', authController.getUserLogin);

// router.post('/', authController.postUserLogin);
