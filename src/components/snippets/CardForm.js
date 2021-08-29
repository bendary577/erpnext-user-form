import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import 'react-phone-number-input/style.css';
import { useLocation } from 'react-router-dom';
import { PAYMENT_IFRAME_URL } from '../../services/apis';
import {authenticate} from '../../services/payment';

const CardForm = (props) => {

    const location = useLocation();
    const { t } = useTranslation();

    useEffect(()=>{
        authenticate();
    }, [])

    return (
        <div className="form_div" >
            <div>
                <iframe src={PAYMENT_IFRAME_URL+localStorage.getItem("payment_token")} height="1000" width="80%" style={{margin : 0, padding : 0}} title="payment form"></iframe>
            </div>
        </div>
    )
}

export default CardForm;