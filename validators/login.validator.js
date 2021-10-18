const Joi = require('joi');

const { constantsGerexpConfig: { EMAIL_REGEXP, PASSWORD_REGESP } } = require('../config');

const loginUser = Joi.object({
    password: Joi.string().regex(PASSWORD_REGESP).required(),
    email: Joi.string().regex(EMAIL_REGEXP)
});

module.exports = {
    loginUser
};
