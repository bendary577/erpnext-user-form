import React from "react";
import { Stepper, Step } from 'react-form-stepper';
import { useTranslation } from 'react-i18next';

const StepperComponent = (props) => {

    const { t } = useTranslation();
        return (              
            <div className="stepper_div"> 
                <div class="row">
                    <Stepper className="w-100"  activeStep={props.activeStep}>
                        <Step label={t(`form_data.registration_form`)}  onClick={()=>{props.setCurrentStep(0)}} active={props.activeStep === 0} />
                        <Step label={t(`form_data.checkout`)} onClick={()=>{props.setCurrentStep(1)}} active={props.activeStep === 1} />
                        <Step label={t(`form_data.confirmation`)} onClick={()=>{props.setCurrentStep(2)}} active={props.activeStep === 2} />
                        <Step label={t(`form_data.installation`)} onClick={()=>{props.setCurrentStep(3)}} active={props.activeStep === 3} />
                    </Stepper>
                </div>
            </div>
        );
}

export default StepperComponent;
