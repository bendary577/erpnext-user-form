import React from 'react';
import '../../assets/css/subscription_plan_card.css';
import checkIcon from '../../assets/images/e-invoice/check.png';
import handIcon from '../../assets/icons/become partner/hand.png';
import { useTranslation } from 'react-i18next';

const ImplementerCard = (props) => {

    const { t } = useTranslation();

    return (
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
                        <form class="mx-1 mx-md-4">
                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <input type="text" id="full_name" placeholder={t("bacome_partner.full_name")} class="form-control" required/>
                                </div>
                            </div>
                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <input type="text" id="company_name" placeholder={t("bacome_partner.company_name")} class="form-control" required/>
                                </div>
                            </div>
                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <input type="email" id="business_email" placeholder={t("bacome_partner.business_mail")} class="form-control" required/>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="d-flex justify-content-center">
                        <h5>{t('bacome_partner.send_cv')}</h5>
                        <img src={handIcon} style={{width:'20px', height:'20px'}} class="mt-2" alt="" />
                    </div>

                    <form class="mt-2">
                        <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                                <input type="file" id="confirm_password"  required/>
                            </div>
                        </div>

                        <a class="btn btn-info-gradiant font-14 border-0 text-white p-3 btn-block mt-3" href="#">{t("bacome_partner.request_implementation_partnership")}</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ImplementerCard;