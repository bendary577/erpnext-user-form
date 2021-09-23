import React from 'react';
import Footer from '../components/snippets/Footer';
import Navbar from '../components/snippets/Navbar';
import DeveloperCard from '../components/cards/DeveloperCard';
import erpnextIcon from '../assets/images/e-invoice/erpnext.png';
import integrationIcon from '../assets/images/e-invoice/integrate.png';
import { useTranslation } from 'react-i18next';
import ImplementerCard from '../components/cards/ImplementerCard';

const BecomePartner = (props) => {

    const { t } = useTranslation();
    
    return (
        <div>
        <Navbar />
        <div className="e_invoice_div" style={{"background-color" : "#eee"}}>
            <section className="py-5" >
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-lg-12 col-xl-11">
                            <div class="card" style={{"border-radius" : "25px"}}>
                            <div class="card-body p-md-5">
                                {/* ------------------------- first row ------------------------------- */}
                                <div class="row justify-content-center">
                                    <p class="wow animate__animated animate__backInDown text-center text-black h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">{t(`bacome_partner.title`)}</p>
                                </div>
                                 {/* ------------------------- second row ------------------------------- */}
                                    <div class="row justify-content-center">
                                        <p class="wow animate__animated animate__backInDown text-center text-black h1 fw-bold mb-5 mx-1 mx-md-4">{t(`bacome_partner.intro`)}</p>
                                        <div class="col-md-12 order-2 order-lg-1">
                                            <div className="cards">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="wow animate__animated animate__backInLeft col-md-6">
                                                            <DeveloperCard icon={erpnextIcon} title={t(`einvocie.integrate`)} description={t(`einvocie.erpnext_integration`)} />
                                                        </div>
                                                        <div className="wow animate__animated animate__backInRight col-md-6">
                                                            <ImplementerCard icon={integrationIcon} title={t(`einvocie.integrate`)}  description={t(`einvocie.existing_erp`)} />
                                                        </div>
                                                    </div>
                                                </div>
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

export default BecomePartner;