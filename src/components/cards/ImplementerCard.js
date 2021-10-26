import React,{useState} from 'react';
import handIcon from '../../assets/icons/become partner/hand.png';
import { useTranslation } from 'react-i18next';
import {sendImplementerCV} from '../../services/requests';
import RequestLoading from '../loading/RequestLoading';
import '../../assets/css/subscription_plan_card.css';

const ImplementerCard = (props) => {

    const [name, setName] = useState(null);
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [implementerCV, setImplementerCV] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation();

    const handleChangeName = (userInput) => {
        setName(userInput)
    }

    const handleChangeCompanyName = (userInput) => {
        setCompanyName(userInput)
    }

    const handleChangeEmail = (userInput) => {
        setEmail(userInput)
    }

    const handleChangeImplementerCV = (userInput) => {
        setImplementerCV(userInput.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let implementationPartnershipFile = new FormData();
        implementationPartnershipFile.append('implementer_cv', implementerCV);
        let args = {
            name,
            companyName,
            email
        }
        setLoading(true) 
        let response = await sendImplementerCV(implementationPartnershipFile, args);
        if(response){
            setMessage(response.data.message);
            setTimeout(function(){ setMessage('') }, 6000)
        }
        setLoading(false)
    }

    return (
        loading === false ? 
        <div className="subscription_plan_card_div">
            <div class="card card-shadow border-0 mb-4">
            <div class="card-body p-4">
                    <div class="d-flex align-items-center">
                        <h5 class="font-weight-medium mb-0"><strong>{t("bacome_partner.implementation_partner")}</strong></h5>
                    </div>
                    <div className="d-flex mt-2">
                        <h6 className="text-justify">{t("bacome_partner.implementation_partner_intro")}</h6>
                    </div>
                    <div className="wow animate__animated animate__backInLeft text my-3">
                        <form class="mx-1 mx-md-4" onSubmit={handleSubmit}>
                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <input type="text" onChange={(e)=> {handleChangeName(e.target.value)}} id="full_name" placeholder={t("bacome_partner.full_name")} class="form-control" required/>
                                </div>
                            </div>
                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <input type="text" onChange={(e)=> {handleChangeCompanyName(e.target.value)}} id="company_name" placeholder={t("bacome_partner.company_name")} class="form-control" required/>
                                </div>
                            </div>
                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <input type="email" onChange={(e)=> {handleChangeEmail(e.target.value)}} id="business_email" placeholder={t("bacome_partner.business_mail")} class="form-control" required/>
                                </div>
                            </div>
                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <input type="file" id="implementer_cv" name="implementer_cv" onChange={handleChangeImplementerCV} required/>
                                </div>
                            </div>

                            <div class="d-flex justify-content-center">
                                <h5>{t('bacome_partner.send_cv')}</h5>
                                <img src={handIcon} style={{width:'20px', height:'20px'}} class="mt-2" alt="" />
                            </div>

                            {message === '' ? <></> : <h5 className="text-success">{message}</h5>}
                            <a class="btn btn-info-gradiant font-14 border-0 text-white p-3 btn-block mt-3"  onClick={handleSubmit}  href="javascript:void(0);">{t("bacome_partner.request_implementation_partnership")}</a>
                        
                        </form>
                    </div>
                </div>
            </div>
        </div>

        :

        <RequestLoading />
    )
}

export default ImplementerCard;