import Joi from 'Joi';

const loginValidation = (data) => {
    const schema = Joi.object().keys({
       username: Joi.string().required(),
       password: Joi.string().required()       
    });

    const validationResponse = schema.validate(data, {abortEarly: false});
    if (validationResponse.error) {
        const errorDetails = validationResponse.error.details.map((details) => {
            return {
                message: details.message,
                path: details.path[0],
            }
        });

        return errorDetails;
    }
    return null;

}

module.exports = {
    loginValidation,
} 
