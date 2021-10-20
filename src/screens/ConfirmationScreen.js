import React from 'react';
import confirmMailImage from '../assets/images/form/confirm_mail.png';
import { useTranslation } from 'react-i18next';

const ConfirmationScreen = (props) => {

    const { t } = useTranslation();
    
    return (
        <div className="site_installation_div" style={{"height":"500px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="">
                            <div className="">
                                <h2 className="font-weight-bold">{t('form_data.confirm_data')}</h2>
                            </div>
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Verification Code</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <a href="javascript:void();" className="btn btn-primary" onClick={()=> { props.setCurrentStep(3) }}>Submit</a>
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