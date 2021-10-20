import React, {useState} from 'react';
import confirmMailImage from '../assets/images/form/confirm_mail.png';
import { useTranslation } from 'react-i18next';
import {useUserData} from '../context/UserDataContext';
import {checkConfirmationCode} from '../services/requests';

const ConfirmationScreen = (props) => {

    const { t } = useTranslation();
    const [confirmationCode, setConfirmationCode] = useState('');
    const [message, setMessage] = useState('');
    const {email} = useUserData();
    
    const handleChangeConfirmationCode = (userInput) => {
        setConfirmationCode(userInput)
    }

    const checkVerificationCode = async (e) => {
        e.preventDefault();
        let data = {
            code : confirmationCode,
            email,
        }
        let response = await checkConfirmationCode(data);
        if(response.status === 200){
            props.setCurrentStep(3)
        }else{
            setMessage(response.data.message);
        }
    }

    return (
        <div className="site_installation_div" style={{"height":"500px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="">
                            <div className="">
                                <h2 className="font-weight-bold">{t('form_data.confirm_data')}</h2>
                            </div>
                            <form onSubmit={checkVerificationCode}>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Verification Code</label>
                                    <input type="email" value={confirmationCode} onChange={(e)=> {handleChangeConfirmationCode(e.target.value)}}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <button type="submit" onClick={checkVerificationCode}  class="btn btn-primary btn-lg btn-block">Submit</button> 
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={confirmMailImage} style={{width:'350px', height:'350px'}} class="" alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ConfirmationScreen;