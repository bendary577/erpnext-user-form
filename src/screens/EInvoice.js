import React from 'react';
import Footer from '../components/snippets/Footer';
import Navbar from '../components/snippets/Navbar';
import InvoiceImg from '../assets/images/e-invoice/invoice.png';
import EInvoiceServiceCard from '../components/cards/EInvoiceServiceCard';
import erpnextIcon from '../assets/images/e-invoice/erpnext.png';
import integrationIcon from '../assets/images/e-invoice/integrate.png';
import checkIcon from '../assets/images/e-invoice/check.png';
import EInvoiceBenifitsCard from '../components/cards/EInvoiceBenifitsCard';
import validationIcon from '../assets/images/e-invoice/validation.png';
import enhancementIcon from '../assets/images/e-invoice/enhancement.png';
import facilityIcon from '../assets/images/e-invoice/facility.png';
import costIcon from '../assets/images/e-invoice/cost.png';


const EInvoice = () => {

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
                                        <p class="wow animate__animated animate__backInDown text-center text-black h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Electronic Invoice</p>
                                        <div class="col-md-8 order-2 order-lg-1">
                                            <div className="heading pe-5">
                                                <h2 className="wow animate__animated animate__backInLeft text-justify">We offer all services concerning the egyptian e-invoicing system</h2>
                                            </div>
                                            <div className="wow animate__animated animate__backInLeft text me-5 my-5">
                                                <div className="d-flex mb-2">
                                                    <img src={checkIcon} style={{width:'15px', height:'15px'}} className="mt-2 mx-2" alt="" />
                                                    <h4>Full digital invoice processing​</h4>
                                                </div>
                                                <div className="d-flex mb-2">
                                                    <img src={checkIcon} style={{width:'15px', height:'15px'}} className="mt-2 mx-2" alt="" />
                                                    <h4>Simplification of declaration submission​</h4>
                                                </div>
                                                <div className="d-flex mb-2">
                                                    <img src={checkIcon} style={{width:'15px', height:'15px'}} className="mt-2 mx-2" alt="" />
                                                    <h4>Improved digital taxpayer experience</h4>
                                                </div>
                                                <div className="d-flex mb-2">
                                                    <img src={checkIcon} style={{width:'15px', height:'15px'}} className="mt-2 mx-2" alt="" />
                                                    <h4>Improved digital taxpayer experience</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="wow animate__animated animate__backInRight col-md-4 d-flex align-items-center order-1 order-lg-2">
                                                <img src={InvoiceImg} style={{width:"300px", height:"300px"}} alt="" />
                                        </div>
                                    </div>

                                     {/* ------------------------- second row ------------------------------- */}
                                    <div class="row justify-content-center">
                                        <p class="text-center text-black h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Services</p>
                                        <div class="col-md-12 order-2 order-lg-1">
                                            <div className="heading mb-5">
                                                <h4 className="">cseletction offers integrating your erp system with e-invoice, or use ours !</h4>
                                            </div>
                                            <div className="cards">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="wow animate__animated animate__backInLeft col-md-6">
                                                            <EInvoiceServiceCard icon={erpnextIcon} title="Integrate" description="your erp system with e-invoice"/>
                                                        </div>
                                                        <div className="wow animate__animated animate__backInRight col-md-6">
                                                            <EInvoiceServiceCard icon={integrationIcon} title="" description="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                     {/* ------------------------- third row ------------------------------- */}
                                     <div class="row justify-content-center">
                                        <p class="text-center text-black h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Why to integrate E-Invoice ?</p>
                                        <div class="col-md-12 order-2 order-lg-1">
                                            <div className="heading mb-5">
                                                <h4 className="">leverage the huge benifits of e-invoice to enhance your business</h4>
                                            </div>
                                            <div className="cards">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="wow animate__animated animate__backInLeft col-md-12">
                                                            <EInvoiceBenifitsCard icon={validationIcon} title="validate" description="Validate invoice items and data for parties before issuing." />
                                                        </div>
                                                        <div className="wow animate__animated animate__backInRight col-md-12">
                                                            <EInvoiceBenifitsCard icon={enhancementIcon} title="enhancement" description="Enhance the company taxation position by classifying it as a Low-Risk profile company"/>
                                                        </div>
                                                        <div className="wow animate__animated animate__backInLeft col-md-12">
                                                            <EInvoiceBenifitsCard icon={facilityIcon} title="facility" description="Facilitate inter-company settlement procedures for VAT"/>
                                                        </div>
                                                        <div className="wow animate__animated animate__backInRight col-md-12">
                                                            <EInvoiceBenifitsCard icon={costIcon} title="cost reduction" description="Reduce the administrative burden, cost of transactions and the need to archive paper invoice" />
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

export default EInvoice;