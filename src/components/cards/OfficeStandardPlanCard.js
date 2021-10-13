import React from 'react';
import '../../assets/css/plan.css';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import teamsIcon from '../../assets/icons/microsoft/teams.png';
import sharepointIcon from '../../assets/icons/microsoft/sharePoint.png';
import oneDriveIcon from '../../assets/icons/microsoft/oneDrive.png';
import exchangeIcon from '../../assets/icons/microsoft/exchange.png';

const OfficeStandardPlanCard = () => {

    const { t } = useTranslation();

    return (
        <div className="subscription_plan_card_div w-100">
            <div class="pricingTable blue p-4" style={{height:'1200px'}}>
                <div class="pricingTable-header">
                    <i class="fa fa-adjust"></i>
                    <div class="price-value"> 
                        <div className="d-flex justify-content-center">
                            $10.00
                            <h5 className="mt-3"><small>{t(`subscription.per_user`)}</small></h5>
                        </div>
                        <h6 className="text-danger">{t(`subscription.after`)} <del>$15.00</del></h6>
                        <span class="month">{t(`subscription.per_month`)}</span>
                    </div>
                </div>
                <h3 class="heading">{t(`microsoft.standard`)}</h3>
                <div class="pricing-content">
                    <ul>
                        <li>{t(`subscription.all_modules`)}</li>
                        <li>{t(`subscription.users`)}</li>
                        <li>{t(`subscription.security_updates`)}</li>
                        <li>{t(`subscription.server_monitoring`)}</li>
                        <li>{t(`subscription.product_warranty`)}</li>
                        <li>{t(`subscription.email_support`)}</li>
                        <li>{t(`subscription.weekly_backup`)}</li>
                        <li><h5 className="mt-2 text-dark">{t(`microsoft.standard_business`)}</h5></li>
                        <li>
                            <div className="d-flex justify-content-center align-content-center mb-2 mt-2" style={{height : '332px'}}>
                               <p>{t(`microsoft.standard_business_description`)}</p>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex justify-content-around align-content-center mb-2 mt-2">
                                <div>
                                    <img src={teamsIcon} style={{width:'40px', height:'40px'}} alt="ballon"/>
                                    <p>teams</p>
                                </div>
                                
                                <div>
                                    <img src={sharepointIcon} style={{width:'40px', height:'40px'}}  alt="ballon"/>
                                    <p>sharePoint</p>
                                </div>
                                
                            </div>
                        </li>
                        <li>
                            <div className="d-flex justify-content-around align-content-center mb-2">
                                <div>
                                    <img src={oneDriveIcon} style={{width:'40px', height:'40px'}} alt="ballon"/>
                                    <p>oneDrive</p>
                                </div>
                                <div>
                                    <img src={exchangeIcon} style={{width:'40px', height:'40px'}}  alt="ballon"/>
                                    <p>exchange</p>
                                </div> 
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="pricingTable-signup">
                    <Link className="link" to={{pathname:`form`, plan:`microsoft_standard`}}>{t(`subscription.choose_plan`)}</Link>
                </div>
            </div>
        </div>
    )
}

export default OfficeStandardPlanCard;