
import { axiosInstance } from './axios';
import { REGISTRATION_API,
         CHECK_CONFIRMATION_CODE,
         INSTALL_SITE_API,
         SEND_CUSTOMIZATION_PLAN_QUOTE_API,
         SEND_DEVELOPER_CV_API,
         SEND_IMPLEMENTER_CV_API 
        } 
        from './apis';

export const register = async (data) => {
    try {
        let response = await axiosInstance.post(REGISTRATION_API, data);
        return response;
    }catch(error){
        console.log(error);
    }
}

export const checkConfirmationCode = async (data) => {
    try {
        let response = await axiosInstance.post(CHECK_CONFIRMATION_CODE, data);
        return response;
    }catch(error){
        console.log(error);
    }
}

export const installERPNexto = async (data) => {
    try {
        let response = await axiosInstance.post(INSTALL_SITE_API, data);
        return response;
    }catch(error){
        console.log(error);
    }
}

export const sendCustomizationPlanQuote = async (data) => {
    try {
        let response = await axiosInstance.post(SEND_CUSTOMIZATION_PLAN_QUOTE_API, data);
        return response;
    }catch(error){
        console.log(error);
    }
}

export const sendDeveloperCV = async (data) => {
    try {
        let response = await axiosInstance.post(SEND_DEVELOPER_CV_API, data,  {headers: { "Content-Type": "multipart/form-data"}});
        return response;
    }catch(error){
        console.log(error);
    }
}

export const sendImplementerCV = async (data) => {
    try {
        let response = await axiosInstance.post(SEND_IMPLEMENTER_CV_API, data,  {headers: { "Content-Type": "multipart/form-data"}});
        return response;
    }catch(error){
        console.log(error);
    }
}