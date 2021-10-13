import React, {useState, useEffect} from 'react';
import Navbar from '../components/snippets/Navbar';
import Footer from '../components/snippets/Footer';
import Form from '../components/snippets/Form';
import StepperComponent from '../components/buttons/StepperComponent';
import CardForm from '../components/snippets/CardForm';
import { useLocation } from 'react-router-dom';
import installationImage from '../assets/images/form/installing.png';
import { useTranslation } from 'react-i18next';

const ConfirmationScreen = () => {

    const [step, setStep] = useState(0);
    const location = useLocation();
    const { t } = useTranslation();
    useEffect(()=>{
        setCurrentStep(0)
    }, [])

    const setCurrentStep = (value) => {
        setStep(value);
    }
    
    return (
        <div className="site_installation_div" style={{"height":"400px"}}>
            <div className="justify-content-center align-items-center">
                <div className="">
                    <h2 className="font-weight-bold">{t('form_data.confirm_data')}</h2>
                </div>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Verification Code</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
            </div>
        </div>
    )
}

export default ConfirmationScreen;