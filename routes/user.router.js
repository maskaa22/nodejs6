const router = require('express').Router();

const { userConttoller } = require('../controlles');
const {isUserPresent, checkUniqueEmail} = require("../middlewares/user.middleware");

router.get('/', userConttoller.getAllUsers);

router.post('/', checkUniqueEmail, userConttoller.createUser);

router.get('/:user_id', isUserPresent, userConttoller.getSingleUsers);

router.delete('/:user_id', isUserPresent, userConttoller.deleteUser);

router.patch('/:user_id', isUserPresent, userConttoller.updateUser);

module.exports = router;
