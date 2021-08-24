import React from 'react';
import '../../assets/css/subscription_plan_card.css';
import { useTranslation } from 'react-i18next';

const FreeSubscriptionPlanCard = () => {

    const { t } = useTranslation();

    return (
        <div className="subscription_plan_card_div">
            <div class="card card-shadow border-0 mb-4">
                <div class="card-body p-4">
                <div class="d-flex align-items-center">
                    <h5 class="font-weight-medium mb-0">{t(`subscription.basic_plan`)}</h5>
                    <div class="ml-auto"><span class="badge badge-danger font-weight-normal me-2 p-2">{t(`subscription.popular`)}</span></div>
                </div>
                <div class="row">
                    <div class="col-lg-5 text-center">
                    <div class="price-box my-3">
                        <h3 class="font-weight-light text-success">{t(`subscription.free`)}</h3>
                        <span class="text-dark">{t(`subscription.for_month`)}</span>
                        <span class><del><p class="text-danger">{t(`subscription.deleted_price`)}</p></del></span>
                        <a class="btn btn-info-gradiant font-14 border-0 text-white p-3 btn-block mt-3" href="#">{t(`subscription.choose_plan`)}</a>
                    </div>
                    </div>
                    <div class="col-lg-7 align-self-center">
                        <ul class="list-inline pl-3 font-14 font-weight-medium text-dark ml-2">
                            <li class="text-center py-2"><i class="icon-check text-info mr-2"></i> <span>{t(`subscription.security_updates`)}</span></li>
                            <li class="text-center py-2"><i class="icon-check text-info mr-2"></i> <span>{t(`subscription.server_monitoring`)}</span></li>
                            <li class="text-center py-2"><i class="icon-check text-info mr-2"></i> <span>{t(`subscription.product_warranty`)}</span></li>
                            <li class="text-center py-2"><i class="icon-check text-info mr-2"></i> <span>{t(`subscription.premise_hosting`)}</span></li>
                            <li class="text-center py-2"><i class="icon-check text-info mr-2"></i> <span>{t(`subscription.professional_support`)}</span></li>
                            <li class="text-center py-2"><i class="icon-check text-info mr-2"></i> <span>{t(`subscription.personalised_onboarding`)}</span></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default FreeSubscriptionPlanCard;