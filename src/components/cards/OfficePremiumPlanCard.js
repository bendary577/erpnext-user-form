import React from 'react';
import '../../assets/css/plan.css';
import { useTranslation } from 'react-i18next';
import falseIcon from '../../assets/icons/subscription/false.png';
import { Link } from "react-router-dom";
import teamsIcon from '../../assets/icons/microsoft/teams.png';
import sharepointIcon from '../../assets/icons/microsoft/sharePoint.png';
import oneDriveIcon from '../../assets/icons/microsoft/oneDrive.png';
import exchangeIcon from '../../assets/icons/microsoft/exchange.png';
import wordIcon from '../../assets/icons/microsoft/word.png';
import excelIcon from '../../assets/icons/microsoft/excel.png';
import powerPointIcon from '../../assets/icons/microsoft/powerpoint.png';
import accessIcon from '../../assets/icons/microsoft/access.png';
import publisherIcon from '../../assets/icons/microsoft/publisher.png';
import outlookIcon from '../../assets/icons/microsoft/outlook.png';


const OfficePremiumPlanCard = () => {

    const { t } = useTranslation();

    return (
        <div className="subscription_plan_card_div w-100">
            <div class="pricingTable green p-4" style={{height:'1150px'}}>
                <div class="pricingTable-header">
                    <i class="fa fa-adjust"></i>
                    <div class="price-value"> $20.00 <span class="month">{t(`subscription.per_month`)}</span> </div>
                </div>
                <h3 class="heading">{t(`microsoft.premium`)}</h3>
                <div class="pricing-content">
                    <ul>
                        <li>{t(`subscription.all_modules`)}</li>
                        <li>{t(`subscription.unlimited`)}</li>
                        <li>{t(`subscription.security_updates`)}</li>
                        <li>{t(`subscription.server_monitoring`)}</li>
                        <li>{t(`subscription.product_warranty`)}</li>
                        <li>{t(`subscription.24_support`)}</li>
                        <li>{t(`subscription.weekly_backup`)}</li>
                        <li><h5 className="mt-2 text-dark">{t(`microsoft.premium_business`)}</h5></li>
                        <li>
                            <div className="d-flex justify-content-around align-content-center mb-2 mt-2">
                                <div>
                                    <img src={wordIcon} style={{width:'40px', height:'40px'}}  alt="ballon"/>
                                    <p>word</p>
                                </div>
                                <div>
                                    <img src={excelIcon} style={{width:'40px', height:'40px'}}  alt="ballon"/>
                                    <p>excel</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex justify-content-around align-content-center mb-2 mt-2">
                                <div>
                                    <img src={powerPointIcon} style={{width:'40px', height:'40px'}} alt="ballon"/>
                                    <p>point</p>
                                </div>
                                <div>
                                    <img src={accessIcon} style={{width:'40px', height:'40px'}}  alt="ballon"/>
                                    <p>access</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex justify-content-around align-content-center mb-2 mt-2">
                                <div>
                                <img src={outlookIcon} style={{width:'40px', height:'40px'}}  alt="ballon"/>
                                    <p>outlook</p>
                                </div>
                                <div>
                                    <img src={publisherIcon} style={{width:'40px', height:'40px'}}  alt="ballon"/>
                                    <p>publisher</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex justify-content-around align-content-center mb-2 mt-2" style={{height : '50px'}}>
                               
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
                    <Link className="link" to={{pathname:`form`, plan:`free`}}>{t(`subscription.choose_plan`)}</Link>
                </div>
            </div>
        </div>
    )
}

export default OfficePremiumPlanCard;