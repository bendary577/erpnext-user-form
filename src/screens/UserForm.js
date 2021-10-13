import React, {useState, useEffect} from 'react';
import Navbar from '../components/snippets/Navbar';
import Footer from '../components/snippets/Footer';
import Form from '../components/snippets/Form';
import StepperComponent from '../components/buttons/StepperComponent';
import CardForm from '../components/snippets/CardForm';
import { useLocation } from 'react-router-dom';
import SiteInstallation from './SiteInstallation';

const UserForm = () => {

    const [step, setStep] = useState(0);
    const location = useLocation();

    useEffect(()=>{
        setCurrentStep(0)
    }, [])

    const setCurrentStep = (value) => {
        setStep(value);
    }
    
    return (
        <div className="user_form_div">
            <Navbar />
            <div className="form_div" style={{"background-color" : "#eee"}}>
                <section className="py-5" >
                    <div class="container">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-lg-12 col-xl-11">
                                <div class="card text-black" style={{"border-radius" : "25px"}}>
                                    <div class="card-body p-md-5">
                                        {
                                            location.plan === 'free' ?
                                                <Form setCurrentStep={setCurrentStep} />
                                            :
                                            <div className="">
                                                <div className="stepper">
                                                    <StepperComponent setCurrentStep={setCurrentStep} activeStep={step}/>
                                                </div>
                                                <div className="action">
                                                    {
                                                        step === 0 ?
                                                        <CardForm setCurrentStep={setCurrentStep} />
                                                        :
                                                        step === 1 ? 
                                                        <Form setCurrentStep={setCurrentStep} />   
                                                        :
                                                        <SiteInstallation />
                                                    }
                                                </div>
                                            </div>
                                            }
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

export default UserForm;