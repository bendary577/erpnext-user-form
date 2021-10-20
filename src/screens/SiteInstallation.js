import React, {useState, useEffect} from 'react';
import Navbar from '../components/snippets/Navbar';
import Footer from '../components/snippets/Footer';
import Form from '../components/snippets/Form';
import StepperComponent from '../components/buttons/StepperComponent';
import CardForm from '../components/snippets/CardForm';
import { useLocation } from 'react-router-dom';
import installationImage from '../assets/images/form/installing.png';

const SiteInstallation = () => {

    const [step, setStep] = useState(0);
    const location = useLocation();

    useEffect(()=>{
        setCurrentStep(0)
    }, [])

    const setCurrentStep = (value) => {
        setStep(value);
    }
    
    return (
        <div className="site_installation_div" style={{"height":"500px"}}>
            <div>
                <div className="">
                    <h1 className="font-weight-bold">Your site is being installed right now</h1>
                    <h4 className="font-weight-bold my-3">please be patient, this may take a few minutes</h4>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <img src={installationImage} style={{width:'570px', height:'400px'}} class="" alt="" />
               </div>
               <div class="progress">
                    <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    )
}

export default SiteInstallation;