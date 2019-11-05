const Joi = require('@hapi/joi');

registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string()
            .alphanum()
            .min(6)
            .required(),
        email: Joi.string()
            .min(10)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
        // confirm_password: Joi.ref('password'),
    });
    return schema.validate(data);
}

loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .min(10)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    });
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;