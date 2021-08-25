import React from 'react';
import Footer from '../components/snippets/Footer';
import Navbar from '../components/snippets/Navbar';
import ksaIcon from '../assets/icons/zakat/ksa.png';
import EInvoiceServiceCard from '../components/cards/EInvoiceServiceCard';
import checkIcon from '../assets/images/e-invoice/check.png';
import kaabaIcon from '../assets/icons/zakat/kaaba.png';
import zakatIcon from '../assets/icons/zakat/zakat.png';
import mapIcon from '../assets/icons/zakat/map.png';
import ZakatCircleCard from '../components/cards/ZakatCircleCard';
import incomeIcon from '../assets/icons/zakat/income.png';
import taxesIcon from '../assets/icons/zakat/taxes.png';
import taxIcon from '../assets/icons/zakat/tax.png';
import { useTranslation } from 'react-i18next';

const ZakatAuthority = () => {

    const { t } = useTranslation();

    return (    
        <div>
            <Navbar />
            <div className="zakat_authority_div" style={{"background-color" : "#eee"}}>
                <section className="py-5" >
                    <div class="container">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-lg-12 col-xl-11">
                                <div class="card" style={{"border-radius" : "25px"}}>
                                <div class="card-body p-md-5">
                                    {/* ------------------------- first row ------------------------------- */}
                                    <div class="row justify-content-center">
                                        <p class="wow animate__animated animate__backInDown text-center text-black h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">{t(`zakat.title`)}</p>
                                        <div className="heading pe-5">
                                            <h2 className="wow animate__animated animate__backInLeft py-3 px-5">{t(`zakat.intro`)}</h2>
                                        </div>
                                        <div class="col-md-8 order-2 order-lg-1">
                                            <div className="wow animate__animated animate__backInLeft text me-5 my-5">
                                                <div className="d-flex mb-2">
                                                    <img src={checkIcon} style={{width:'15px', height:'15px'}} className="mt-2 mx-2" alt="" />
                                                    <h4>{t(`zakat.litst_item_1`)}​</h4>
                                                </div>
                                                <div className="d-flex mb-2">
                                                    <img src={checkIcon} style={{width:'15px', height:'15px'}} className="mt-2 mx-2" alt="" />
                                                    <h4>{t(`zakat.litst_item_2`)}​</h4>
                                                </div>
                                                <div className="d-flex mb-2">
                                                    <img src={checkIcon} style={{width:'15px', height:'15px'}} className="mt-2 mx-2" alt="" />
                                                    <h4>{t(`zakat.litst_item_3`)}</h4>
                                                </div>
                                                <div className="d-flex mb-2">
                                                    <img src={checkIcon} style={{width:'15px', height:'15px'}} className="mt-2 mx-2" alt="" />
                                                    <h4>{t(`zakat.litst_item_4`)}</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="wow animate__animated animate__backInRight col-md-4 d-flex align-items-center order-1 order-lg-2">
                                            <img src={ksaIcon} style={{width:"300px", height:"300px"}} alt="" />
                                        </div>
                                    </div>

                                     {/* ------------------------- second row ------------------------------- */}
                                    <div class="row justify-content-center">
                                        <p class="text-center text-black h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">{t(`zakat.main_services`)}</p>
                                        <div class="col-md-12 order-2 order-lg-1">
                                            <div className="heading mb-5">
                                                <h4 className="">{t(`zakat.main_services_intro`)}</h4>
                                            </div>
                                            <div className="cards">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="wow animate__animated animate__backInDown col-md-4">
                                                            <EInvoiceServiceCard icon={kaabaIcon} title={t(`zakat.registration`)} description=""/>
                                                        </div>
                                                        <div className="wow animate__animated animate__backInDown col-md-4">
                                                            <EInvoiceServiceCard icon={zakatIcon} title={t(`zakat.payment_refund`)} description=""/>
                                                        </div>
                                                        <div className="wow animate__animated animate__backInDown col-md-4">
                                                            <EInvoiceServiceCard icon={mapIcon} title={t(`zakat.immediate_certificate`)} description=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                     {/* ------------------------- third row ------------------------------- */}
                                     <div class="row justify-content-center">
                                        <p class="text-center text-black h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">activity type you will deal with</p>
                                        <div class="col-md-12 order-2 order-lg-1">
                                            <div className="heading mb-5">
                                                <h4 className="">leverage the huge benifits of e-invoice to enhance your business</h4>
                                            </div>
                                            <div className="cards">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="wow animate__animated animate__backInDown col-md-4">
                                                            <ZakatCircleCard icon={incomeIcon} title="zakat registration" description="Zakat is subject to any activity intended to earn money or work, so once registered with the Ministry of Commerce, TIN is.." />
                                                        </div>
                                                        <div className="wow animate__animated animate__backInDown col-md-4">
                                                            <ZakatCircleCard icon={taxesIcon} title="zakat payment" description="After you complete your declaration, a SADAD invoice is generated containing the invoice number and the amount due." />
                                                        </div>
                                                        <div className="wow animate__animated animate__backInDown col-md-4">
                                                            <ZakatCircleCard icon={taxIcon} title="zakat declaration" description="This service allows you to submit Zakat related returns for a specific financial period (including transaction pricing forms)..." />
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

export default ZakatAuthority;