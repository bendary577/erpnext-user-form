import React from 'react';
import FreeSubscriptionPlanCard from '../components/cards/FreeSubscriptionPlanCard';
import PremiumSubscriptionPlanCard from '../components/cards/PremiumSubscriptionPlanCard';
import Footer from '../components/snippets/Footer';
import Navbar from '../components/snippets/Navbar';

const SubscriptionPlans = () => {

    return (
        <div>
            <Navbar />
            <div className="subscription_plans_div" style={{"background-color" : "#eee", height : "780px"}}>
                <section className="py-5" >
                    <div class="container">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-lg-12 col-xl-11">
                                <div class="card" style={{"border-radius" : "25px"}}>
                                <div class="card-body p-md-5">
                                    <div class="row justify-content-center">
                                        <p class="wow animate__animated animate__backInLeft text-center text-black h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Subscription Plans</p>
                                        <div class="wow animate__animated animate__backInDown col-lg-6 col-md-6 col-xl-6 order-2 order-lg-1">
                                            <FreeSubscriptionPlanCard />
                                        </div>
                                        <div class="wow animate__animated animate__backInDown col-lg-6 col-md-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                                            <PremiumSubscriptionPlanCard />
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