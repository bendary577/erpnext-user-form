import { axiosPaymentInstance } from './axios';
import { PAYMENT_AUTH_API, REGISTER_ORDER_API, GET_PAYMENT_KEY_API } from "./apis";
import paymentConfig from '../config/paymentConfig.json';


    export const authenticate = async (plan) => {
        try{
            let data = {
                api_key : paymentConfig.API_KEY
            }
            let response = await axiosPaymentInstance.post(PAYMENT_AUTH_API, data);
            if(response.status === 201){
                localStorage.setItem("payment_authentication_token", response.data.token);
                registerOrder(plan);
            }else{
                console.log(response.data.error)
            }
        }catch(error){
            console.log(error)
        }
    }

    export const registerOrder = async (plan) => {
        console.log("mercahnt id is " + generateMerchantId(12))
        let planName = "";
        let planDescription = "";
        let planPrice = "";
        if(plan === 'standard'){
            planName = paymentConfig.STANDARD_PLAN_NAME;
            planDescription = paymentConfig.STANDARD_PLAN_DESCRIPTION;
            planPrice = paymentConfig.STANDARD_PLAN_PRICE;
        }else if(plan === 'premium'){
            planName = paymentConfig.STANDARD_PLAN_NAME;
            planDescription = paymentConfig.STANDARD_PLAN_DESCRIPTION;
            planPrice = paymentConfig.STANDARD_PLAN_PRICE;
        }else if(plan === 'microsoft_standard'){
            planName = paymentConfig.MICROSOFT_STANDARD_PLAN;
            planDescription = paymentConfig.MICROSOFT_STANDARD_PLAN_DESCRIPTION;
            planPrice = paymentConfig.MICROSOFT_STANDARD_PLAN_PRICE;
        }else if(plan === 'microsoft_nexto_365'){
            planName = paymentConfig.MICROSOFT_NEXTO_365_PLAN;
            planDescription = paymentConfig.MICROSOFT_NEXTO_365_PLAN_DESCRIPTION;
            planPrice = paymentConfig.MICROSOFT_NEXTO_365_PLAN_PRICE;
        }
        try{
            let request_data = {
                auth_token: localStorage.getItem("payment_authentication_token"),
                delivery_needed : "false",
                amount_cents : planPrice,
                currency : "EGP",
                merchant_order_id : generateMerchantId(12) ,
                items : [
                        {
                            name: planName,
                            amount_cents: planPrice,
                            description: planDescription,
                            quantity: "1"
                        }
                    ]
                }
            let response = await axiosPaymentInstance.post(REGISTER_ORDER_API, request_data);
            if(response.status === 200 || response.status === 201){
                localStorage.setItem("payment_order_id", response.data.id);
                getPaymentKey(planPrice);
            }else{
                console.log(response.data.error)
            }
        }catch(error){
            console.log(error)
        }
    }

    export const getPaymentKey = async (planPrice) => {
        let order_id = localStorage.getItem("payment_order_id");
        try{
            let request_data = {
                auth_token: localStorage.getItem("payment_authentication_token"),
                amount_cents: planPrice, 
                expiration: 3600, 
                order_id: localStorage.getItem("payment_order_id"),
                billing_data: {
                    apartment: "NA", 
                    email: "m.rashwan@cselection.com", 
                    floor: "NA", 
                    first_name: "C-Selection", 
                    street: "Ethan Land", 
                    building: "NA", 
                    phone_number: "01005808860", 
                    shipping_method: "NA", 
                    postal_code: "NA", 
                    city: "NA", 
                    country: "NA", 
                    last_name: "Technologies", 
                    state: "NA"
                }, 
                currency: "EGP", 
                integration_id: 15964,
                lock_order_when_paid: "false"
            }
            let response = await axiosPaymentInstance.post(GET_PAYMENT_KEY_API, request_data);
            if(response.status === 200 || response.status === 201 ){
                localStorage.setItem("payment_token", response.data.token);
            }else{
                console.log(response.data)
            }
        }catch(error){
            console.log(error)
        }
    }


    const generateMerchantId = (length) => {
        return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
    }
