import React from 'react';
import '../../assets/css/subscription_plan_card.css';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const PremiumSubscriptionPlanCard = (props) => {

    const { t } = useTranslation();

    return (
        <div className="subscription_plan_card_div w-100">
            <div class="pricingTable blue p-4" style={{height:'580px'}}>
                <div class="pricingTable-header">
                    <i class="fa fa-diamond"></i>
                    <div class="price-value">
                        <div className="d-flex justify-content-center">
                            $10.00
                            <h5 className="mt-3"><small>{t(`subscription.per_user`)}</small></h5>
                        </div>
                        <h6 className="text-danger">{t(`subscription.after`)} <del>$20.00</del></h6>
                        <span class="month">{t(`subscription.per_month`)}</span>
                    </div>
                </div>
                <h3 class="heading">{t(`subscription.premium_plan`)}</h3>
                <div class="pricing-content">
                    <ul>
                        <li>{t(`subscription.all_modules`)}</li>
                        <li>{t(`subscription.unlimited`)}</li>
                        <li>{t(`subscription.security_updates`)}</li>
                        <li>{t(`subscription.server_monitoring`)}</li>
                        <li>{t(`subscription.product_warranty`)}</li>
                        <li>{t(`subscription.24_support`)}</li>
                        <li>{t(`subscription.weekly_backup`)}</li>
                    </ul>
                </div>
                <div class="pricingTable-signup ">
                   <Link className="link" to={{pathname:`form`, plan:`premium`}}>{t(`subscription.choose_plan`)}</Link> 
                </div>
            </div>
        </div>
    )
}

export default PremiumSubscriptionPlanCard;