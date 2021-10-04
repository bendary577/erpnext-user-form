import React from 'react';
import OfficePremiumPlanCard from '../components/cards/OfficePremiumPlanCard';
import OfficeStandardPlanCard from '../components/cards/OfficeStandardPlanCard';
import Footer from '../components/snippets/Footer';
import Navbar from '../components/snippets/Navbar';
import { useTranslation } from 'react-i18next';
import microsoftImage from '../assets/images/microsoft/microsoft2.png';
import '../assets/css/microsoft365.css';

const Microsoft365 = () => {

    const { t } = useTranslation();

    return (
        <div>
            <Navbar />
            <div className="microsoft365_div" style={{"background-color" : "#eee"}}>
                <section className="py-5" >
                    <div class="container">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-lg-12 col-xl-11">
                                <div class="card" style={{"border-radius" : "25px"}}>
                                    <div class="card-body p-md-5">
                                        <div class="row ">
                                            <div class="d-flex justify-content-center">
                                                <p class="wow animate__animated animate__backInLeft text-center text-black h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">{t(`microsoft.erpnexto365`)}</p>
                                            </div>
                                            <h4 className="mb-4 wow animate__animated animate__backInLeft"><strong>{t(`microsoft.erpnexto365_intro`)}</strong></h4>
                                            <div className="row">
                                                <div class="wow animate__animated animate__backInDown d-flex justify-content-center align-items-center col-lg-3 col-md-6 col-sm-6">
                                                    <OfficeStandardPlanCard />
                                                </div>
                                                <div class="wow animate__animated animate__backInDown d-flex justify-content-center align-items-center col-lg-3 col-md-6 col-sm-6">
                                                    <OfficePremiumPlanCard />
                                                </div>
                                                <div className="wow animate__animated animate__backInRight col-lg-3 col-md-3 col-sm-3 mx-2">
                                                    <img src={microsoftImage} style={{width:'400px', height:'400px'}}  alt="ballon"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
        
    )
}

export default Microsoft365;