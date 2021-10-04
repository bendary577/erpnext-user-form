import React from 'react';
import FreeSubscriptionPlanCard from '../components/cards/FreeSubscriptionPlanCard';
import PremiumSubscriptionPlanCard from '../components/cards/PremiumSubscriptionPlanCard';
import Footer from '../components/snippets/Footer';
import Navbar from '../components/snippets/Navbar';
import { useTranslation } from 'react-i18next';
import StandardSubscriptionPlanCard from '../components/cards/StandardSubscriptionPlanCard';
import CustomizationSubscriptionPlanCard from '../components/cards/CustomizationSubscriptionPlanCard';
import '../assets/css/subscription_screen.css';
import ballonIcon from '../assets/icons/subscription/balloon.png'

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
                                    <div class="row ">
                                        <div class="d-flex justify-content-center">
                                            <p class="wow animate__animated animate__backInLeft text-center text-black h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">{t(`subscription.subscription_plans`)}</p>
                                            <a class="wow animate__animated animate__backInRight btn h-50 mt-4 btn-danger" href="become-partner">
                                                <img src={ballonIcon} style={{width:'20px', height:'20px'}} class="mx-2" alt="ballon"/>
                                                {t('subscription.become_partner')}
                                            </a>
                                        </div>
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
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">{t(`subscription.get_quote`)}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" ></button>
                        </div>
                        <div class="modal-body text-left">
                            <form>
                                <div class="mb-3">
                                    <h4 for="exampleInputEmail1" class="form-label text-justify">{t(`form_data.email`)}</h4>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <h4 for="exampleInputPassword1" class="form-label text-justify">{t(`form_data.phone`)}</h4>
                                    <input type="tel" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3">
                                    <h4 for="exampleInputPassword1" class="form-label text-justify">{t(`form_data.company_name`)}</h4>
                                    <input type="text" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" class="btn btn-primary text-justify">{t(`general.send`)}</button>
                            </form>
                        </div>
                        </div>
                    </div>
            </div>
            <Footer />
        </div>
        
    )
}

export default SubscriptionPlans;