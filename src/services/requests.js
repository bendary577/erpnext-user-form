
import { axiosInstance } from './axios';
import { REGISTRATION_API } from './apis';

export const register = async (data) => {
    try {
        let response = await axiosInstance.post(REGISTRATION_API, data);
        return response;
    }catch(error){
        console.log(error);
    }
}