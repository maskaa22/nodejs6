const Joi = require('joi');
const {
    CURRENT_YEAR, EMAIL_REGEXP, PASSWORD_REGESP, ID_REGEXP, NAME_REGEXP
} = require('../config/constans');
const userRolesEnum = require('../config/user-roles-enum');

const girlValidator = Joi.object({
    name: Joi.string(),
    age: Joi.number().min(15).max(60)
});

const createUserValidator = Joi.object({
    name: Joi.string().alphanum().regex(NAME_REGEXP)
        .trim()
        .required(),
    password: Joi.string().regex(PASSWORD_REGESP).required(),
    born_year: Joi.string().min(CURRENT_YEAR - 120).max(CURRENT_YEAR - 6),
    email: Joi.string().regex(EMAIL_REGEXP).required(),
    role: Joi.string().allow(...Object.values(userRolesEnum)),

    car: Joi.boolean(),

    girls: Joi.array().items(girlValidator).when('car', { is: true, then: Joi.required() })
});

const updateUser = Joi.object({
    name: Joi.string().alphanum().regex(NAME_REGEXP),
    email: Joi.string().regex(EMAIL_REGEXP)
});

const userValidatorForId = Joi.object({
    user_id: Joi.string().regex(ID_REGEXP)
});

const allUserValidator = Joi.object({
    name: Joi.string().alphanum().regex(NAME_REGEXP),
    email: Joi.string().regex(EMAIL_REGEXP),
    role: Joi.string().allow(...Object.values(userRolesEnum))
});

module.exports = {
    createUserValidator,
    updateUser,
    userValidatorForId,
    allUserValidator
};
