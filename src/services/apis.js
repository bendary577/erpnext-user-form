let BASE_API = `http://34.125.19.92/`;
//let BASE_API = `http://127.0.0.1:5000/`;

//-------------------------------- Auth API endpoints --------------------------
export const REGISTRATION_API = `${BASE_API}signup`;

//-------------------------------- Send Customization Plan Quote API endpoints --------------------------
export const SEND_CUSTOMIZATION_PLAN_QUOTE_API = `${BASE_API}send-quote`;

//-------------------------------- Send developer cv Quote API endpoints --------------------------
export const SEND_DEVELOPER_CV_API = `${BASE_API}developer-CV`;

//-------------------------------- Send implementer cv Quote API endpoints --------------------------
export const SEND_IMPLEMENTER_CV_API = `${BASE_API}implementer-CV`;

//------------------------------- Payment API endpoints -------------------------
export const PAYMENT_AUTH_API = `https://accept.paymob.com/api/auth/tokens`;
export const REGISTER_ORDER_API = `https://accept.paymob.com/api/ecommerce/orders`;
export const GET_PAYMENT_KEY_API = `https://accept.paymob.com/api/acceptance/payment_keys`;
export const PAYMENT_IFRAME_URL = `https://accept.paymob.com/api/acceptance/iframes/25949?payment_token=`