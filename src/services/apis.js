let BASE_API = `http://127.0.0.1:5000/`;

//-------------------------------- Auth API endpoints --------------------------
export const REGISTRATION_API = `${BASE_API}signup`;



//------------------------------- Payment API endpoints -------------------------
export const PAYMENT_AUTH_API = `https://accept.paymob.com/api/auth/tokens`;
export const REGISTER_ORDER_API = `https://accept.paymob.com/api/ecommerce/orders`;
export const GET_PAYMENT_KEY_API = `https://accept.paymob.com/api/acceptance/payment_keys`;

export const PAYMENT_IFRAME_URL = `https://accept.paymob.com/api/acceptance/iframes/25949?payment_token=`