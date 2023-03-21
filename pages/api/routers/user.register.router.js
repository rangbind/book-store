import {login, register} from '../../../backend/controller/UserController';
import { registrationValidation } from '../../../backend/validation/registration';

module.exports = {
    'POST': async (data) => {
        const userdata = await register(data);
        const validationRespons = registrationValidation(data);
        if (validationRespons !== null){
            return {
                status: 422,
                data: validationRespons
            }
        }
        
        return {
            status: 201,
            data: userdata
        }
    }
}