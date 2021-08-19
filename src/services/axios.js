import axios from 'axios';

//--------------------------------------- create axios instance -------------------------------
//axios instance to send unauthenticated requests
export const axiosInstance = axios.create({
    withCredentials: false
})


//--------------------------------------- axios request interceptors -------------------------------
axiosInstance.interceptors.request.use(async (req) => {
    return req;
});

//--------------------------------------- axios response interceptors -------------------------------
axiosInstance.interceptors.response.use( undefined , function (error) {
    //Any status codes that falls outside the range of 2xx cause this function to trigger
    //Do something with response error
    return error.response;
});
  