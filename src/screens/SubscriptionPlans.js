import React from 'react';
import FreeSubscriptionPlanCard from '../components/cards/FreeSubscriptionPlanCard';
import PremiumSubscriptionPlanCard from '../components/cards/PremiumSubscriptionPlanCard';
import Footer from '../components/snippets/Footer';
import Navbar from '../components/snippets/Navbar';
import { useTranslation } from 'react-i18next';
import StandardSubscriptionPlanCard from '../components/cards/StandardSubscriptionPlanCard';
import CustomizationSubscriptionPlanCard from '../components/cards/CustomizationSubscriptionPlanCard';
import '../assets/css/subscription_screen.css';

const SubscriptionPlans = () => {

    const { t } = useTranslation();

    return (
        <div>
            <Navbar />
            <div className="subscription_plans_div" style={{"background-color" : "#eee"}}>
                <section className="py-5" >
                    <div class="container">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-lg-12 col-xl-11">
                                <div class="card" style={{"border-radius" : "25px"}}>
                                <div class="card-body p-md-5">
                                    <div class="row justify-content-center">
                                        <p class="wow animate__animated animate__backInLeft text-center text-black h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">{t(`subscription.subscription_plans`)}</p>
                                        <h4 className="mb-4 wow animate__animated animate__backInLeft"><strong>{t(`subscription.intro`)}</strong></h4>
                                        <div class="wow animate__animated animate__backInDown d-flex justify-content-center align-items-center col-lg-3 col-md-6 col-sm-6">
                                            <FreeSubscriptionPlanCard />
                                        </div>
                                        <div class="wow animate__animated animate__backInDown d-flex justify-content-center align-items-center col-lg-3 col-md-6 col-sm-6">
                                            <StandardSubscriptionPlanCard />
                                        </div>  
                                        <div class="wow animate__animated animate__backInDown d-flex justify-content-center align-items-center col-lg-3 col-md-6 col-sm-6">
                                            <PremiumSubscriptionPlanCard />
                                        </div>
                                        <div class="wow animate__animated animate__backInDown d-flex justify-content-center align-items-center col-lg-3 col-md-6 col-sm-6">
                                            <CustomizationSubscriptionPlanCard />
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

export default SubscriptionPlans;