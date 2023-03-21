import Joi from 'Joi';

const registrationValidation = (data) => {
    const schema = Joi.object().keys({
       fullName: Joi.string().required(),
       email: Joi.string().required(), 
       mobile: Joi.number().min(1111111111).max(9999999999).required(),
       gender: Joi.string().allow('male', 'female', 'other'),
       password: Joi.string().required(),
       confirmPassword: Joi.string().equal(Joi.ref('password')).required().label('Confirm password')
       .messages({ 'any.only': '{{#label}} does not match' })
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
    // console.dir(validationResponse.error, {depth: null});
    return null;

}

module.exports = {
    registrationValidation,
} 
