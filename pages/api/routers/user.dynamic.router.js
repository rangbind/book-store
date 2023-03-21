import { loginValidation } from '../../../backend/validation/login';
module.exports = {
    "GET": (data) => {
        const validationRespons = loginValidation(data);
        if (validationRespons !== null){
            return {
                status: 422,
                data: validationRespons
            }
        }
        return {
            status: 200, data,
        };
    },
    "DELETE": (params) => {

    },
    "PATCH": (params, data) => {

    },
    "PUT": (params, data) => {

    }
}