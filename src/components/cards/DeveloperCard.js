import React, {useState} from 'react';
import checkIcon from '../../assets/images/e-invoice/check.png';
import handIcon from '../../assets/icons/become partner/hand.png';
import { useTranslation } from 'react-i18next';
import {sendDeveloperCV} from '../../services/requests';
import RequestLoading from '../loading/RequestLoading';
import '../../assets/css/subscription_plan_card.css';

const DeveloperCard = (props) => {

    const [developerCV, setDeveloperCV] = useState(null);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation();

    const handleChangeDeveloperCV = (userInput) => {
        setDeveloperCV(userInput.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(developerCV)
        let developerCVFile = new FormData();
        developerCVFile.append('developer_cv', developerCV);
        setLoading(true)
        let response = await sendDeveloperCV(developerCVFile);
        if(response){
            setMessage(response.data.message);
            setTimeout(function(){ setMessage('') }, 6000)
        }
        setLoading(false)
    }

    return (
        loading === false ? 
        <div className="subscription_plan_card_div">
            <div class="card card-shadow border-0 mb-4" style={{'height':'550px'}}>
                <div class="card-body p-4">
                    <div class="d-flex align-items-center">
                        <h5 class="font-weight-medium mb-0"><strong>{t("bacome_partner.frappe_developer")}</strong></h5>
                    </div>

                    <div className="mt-2">
                        <h6 className="text-justify">{t("bacome_partner.frappe_developer_intro")}</h6>
                    </div>

                    <div className="wow animate__animated animate__backInLeft text my-3">
                        <div className="d-flex mb-1">
                            <img src={checkIcon} style={{width:'15px', height:'15px'}} className="mt-2 mx-2" alt="" />
                            <p class="text-justify">{t(`bacome_partner.good_python`)}</p>
                        </div>
                        <div className="d-flex mb-1">
                            <img src={checkIcon} style={{width:'15px', height:'15px'}} className="mt-2 mx-2" alt="" />
                            <p>{t(`bacome_partner.good_javascript`)}???</p>
                        </div>
                        <div className="d-flex mb-1">
                            <img src={checkIcon} style={{width:'15px', height:'15px'}} className="mt-2 mx-2" alt="" />
                            <p>{t(`bacome_partner.good_mongodb`)}</p>
                        </div>
                        <div className="d-flex justify-content-start mb-1">
                            <img src={checkIcon} style={{width:'15px', height:'15px'}} className="mt-2 mx-2" alt="" />
                            <p>{t(`bacome_partner.good_frappe`)}</p>
                        </div>
                    </div>

                    <div class="d-flex justify-content-center">
                        <h5>{t(`bacome_partner.send_cv`)}</h5>
                        <img src={handIcon} style={{width:'20px', height:'20px'}} class="mt-2" alt="" />
                    </div>

                    {message === '' ? <></> : <h5 className="text-success">{message}</h5>}

                    <form class="mt-2" onSubmit={handleSubmit}>
                        <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                                <input type="file" name="developer_cv" id="developer_cv" onChange={handleChangeDeveloperCV} required/>
                            </div>
                        </div>

                        <a class="btn btn-info-gradiant font-14 border-0 text-white p-3 btn-block mt-3" onClick={handleSubmit}  href="javascript:void(0);" >{t("bacome_partner.request_technical_partnership")}</a>
                    </form>
                </div>
            </div>
        </div>

        : 
        
        <RequestLoading />
    )
}

export default DeveloperCard;