const router = require('express').Router();

const { registrationController } = require('../controlles');

router.get('/', registrationController.getRegistration);

router.post('/', registrationController.postRegistrarion);

module.exports = router;
