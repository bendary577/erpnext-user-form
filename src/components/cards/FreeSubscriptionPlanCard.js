import React from 'react';
import '../../assets/css/plan.css';
import { useTranslation } from 'react-i18next';
import falseIcon from '../../assets/icons/subscription/false.png';
import { Link } from "react-router-dom";

const FreeSubscriptionPlanCard = () => {

    const { t } = useTranslation();

    return (
        <div className="subscription_plan_card_div w-100">
            <div class="pricingTable p-4" style={{height:'580px'}}>
                <div class="pricingTable-header">
                    <i class="fa fa-adjust"></i>
                    <div class="price-value"> $0.00 <span class="month">{t(`subscription.per_month`)}</span> </div>
                </div>
                <h3 class="heading">{t(`subscription.free_plan`)}</h3>
                <div class="pricing-content">
                    <ul>
                        <li>{t(`subscription.all_modules`)}</li>
                        <li>3 {t(`subscription.users`)}</li>
                        <li>{t(`subscription.security_updates`)}</li>
                        <li>{t(`subscription.server_monitoring`)}</li>
                        <li>{t(`subscription.community_support`)}</li>
                        <li><img className="mb-1" src={falseIcon} style={{width:"20px", height:"20px"}} alt="" /></li>
                        <li><img className="mb-1" src={falseIcon} style={{width:"20px", height:"20px"}} alt="" /></li>
                    </ul>
                </div>
                <div class="pricingTable-signup">
                    <Link className="link" to={{pathname:`form`, plan:`free`}}>{t(`subscription.choose_plan`)}</Link>
                </div>
            </div>
        </div>
    )
}

export default FreeSubscriptionPlanCard;