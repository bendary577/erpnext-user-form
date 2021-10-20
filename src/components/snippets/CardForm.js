import React, {useEffect} from 'react';
import { PAYMENT_IFRAME_URL } from '../../services/apis';
import {authenticate} from '../../services/payment';
import {useUserData} from '../../context/UserDataContext';
import 'react-phone-number-input/style.css';

const CardForm = (props) => {

    const {plan} = useUserData();

    useEffect(()=>{
        authenticate(plan);
    }, [])

    return (
        <div className="form_div" >
            <a href="javascript:void();" className="btn btn-danger" onClick={()=> { props.setCurrentStep(1) }}>Next</a>
            <div>
                <iframe src={PAYMENT_IFRAME_URL+localStorage.getItem("payment_token")} height="1000" width="80%" style={{margin : 0, padding : 0}} title="payment form"></iframe>
            </div>
        </div>
    )
}

export default CardForm;