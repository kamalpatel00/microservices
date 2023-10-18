const Joi = require("joi")

const validateCreateUser = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        mobile: Joi.number().required()
    })
}


module.exports = {
    validateCreateUser
}