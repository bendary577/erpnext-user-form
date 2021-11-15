import React from 'react';
import '../../assets/css/plan.css';
import { useTranslation } from 'react-i18next';
import falseIcon from '../../assets/icons/subscription/false.png';
import {useUserData} from '../../context/UserDataContext';
import { useHistory } from "react-router-dom";

const FreeSubscriptionPlanCard = () => {

    const { t } = useTranslation();
    const history = useHistory();
    const {setPlan} = useUserData();

    const selectFreePlan = () => {
        setPlan('free')
        history.push('form');
    }

    return (
        <div className="subscription_plan_card_div w-100">
            <div class="pricingTable p-4" style={{height:'580px'}}>
                <div class="pricingTable-header">
                    <i class="fa fa-adjust"></i>
                    <div class="price-value"> 
                        <h6 className="text-danger">{t(`subscription.erpnexto_offer`)}</h6> 
                        $0.00 
                        <span class="month">{t(`subscription.per_month`)}</span> 
                    </div>
                </div>
                <h3 class="heading">{t(`subscription.free_plan`)}</h3>
                <div class="pricing-content">
                    <ul>
                        <li>{t(`subscription.all_modules`)}</li>
                        <li>{t(`subscription.free_users`)}</li>
                        <li>{t(`subscription.security_updates`)}</li>
                        <li>{t(`subscription.server_monitoring`)}</li>
                        <li>{t(`subscription.community_support`)}</li>
                        <li><img className="mb-1" src={falseIcon} style={{width:"20px", height:"20px"}} alt="" /></li>
                        <li><img className="mb-1" src={falseIcon} style={{width:"20px", height:"20px"}} alt="" /></li>
                    </ul>
                </div>
                <div class="pricingTable-signup">
                    <a href="javascript:void();" onClick={selectFreePlan} className="link">{t(`subscription.choose_plan`)}</a>
                </div>
            </div>
        </div>
    )
}

export default FreeSubscriptionPlanCard;