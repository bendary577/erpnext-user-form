import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import 'react-phone-number-input/style.css';
import { useLocation } from 'react-router-dom';
import { PAYMENT_IFRAME_URL } from '../../services/apis';
import {authenticate, getPaymentKey, registerOrder} from '../../services/payment';

const CardForm = () => {

    const location = useLocation();
    const { t } = useTranslation();

    useEffect(()=>{
        authenticate();
        //registerOrder();
        //getPaymentKey();
    }, [])



    return (
        <div className="form_div" style={{"background-color" : "#eee"}}>
            <div className="py-5">
                <iframe src={PAYMENT_IFRAME_URL+localStorage.getItem("payment_token")} height="1000" width="600" title="Iframe Example"></iframe>
            </div>
        </div>
    )
}

export default CardForm;