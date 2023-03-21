import { loginValidation } from '../../../backend/validation/login';
module.exports = {
    "POST": (data) => {
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
    }
}