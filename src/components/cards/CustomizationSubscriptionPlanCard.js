import React from 'react';
import '../../assets/css/subscription_plan_card.css';
import { useTranslation } from 'react-i18next';
import questionIcon from '../../assets/icons/subscription/question.png';


const CustomizationSubscriptionPlanCard = (props) => {

    const { t } = useTranslation();


    return (
        <div className="subscription_plan_card_div w-100">
            <div class="pricingTable red p-4" style={{height:'580px'}}>
                <div class="pricingTable-header">
                    <i class="fa fa-cube"></i>
                <div class="price-value">
                    <h6 className="text-dark">{t(`subscription.special_customization`)}</h6>
                    <img className="mb-1" src={questionIcon} style={{width:"70px", height:"70px"}} alt="" />
                </div>
                </div>
                <h3 class="heading">{t(`subscription.customization_plan`)}</h3>
                <div class="pricing-content">
                    <ul>
                        <li>{t(`subscription.start_users`)}</li>
                        <li>{t(`subscription.private_cloud`)}</li>
                        <li>{t(`subscription.security_updates`)}</li>
                        <li>{t(`subscription.premise_installation`)}</li>
                        <li>{t(`subscription.special_customization`)}</li>
                        <li>{t(`subscription.app_development`)}</li>
                        <li>{t(`subscription.invoice_integration`)}</li>
                    </ul>
                </div>
                <div class="pricingTable-signup">
                    <a href="javascript:void();" className="link" data-bs-toggle="modal" data-bs-target="#staticBackdrop">{t(`subscription.request_quote`)} </a>
                </div>
            </div>
        </div>
    )
}

export default CustomizationSubscriptionPlanCard;