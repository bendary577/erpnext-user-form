import React, {useState, useEffect} from 'react';
import {register} from '../../services/requests';
import { useTranslation } from 'react-i18next';
import 'react-phone-number-input/style.css';
import PhoneInput, { parsePhoneNumber } from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import { useLocation } from 'react-router-dom';

const Form = (props) => {

    const location = useLocation();
    const [companyName, setCompanyName] = useState('');
    const [roleInCompany, setRoleInCompany] = useState('');
    const [companySubDomain, setCompanySubDomain] = useState('');
    const [businessMail, setBusinessMail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [checked, setChecked] = useState(false);
    const [plan, setPlan] = useState(location.plan);
    const [value, setValue] = useState();
    const { t } = useTranslation();
    
    useEffect(()=>{
        if(location.plan === 'free'){
            setPlan('free')
        }else if(plan === 'standard'){
            setPlan('standard')
        }else if(plan === 'premium'){
            setPlan('premium')
        }else if(plan === 'microsoft_standard'){
            setPlan('microsoft_standard')
        }else if(plan === 'microsoft_nexto_365'){
            setPlan('microsoft_nexto_365')
        }
    }, [])

    const handleSubmit = async (e) => {
        props.setCurrentStep(2)
        e.preventDefault();
        /*
        let validation = verifyPasswords(password, confirmPassword);
        if(validation){
            let data = {
                company_name : companyName,
                role : roleInCompany,
                site_name : companySubDomain,
                business_mail : businessMail,
                phone,
                password,
                plan
            }
            let response = await register(data);
            if(response.status === 200){
                //clearInputs();
                console.log("success request")
                setMessage("you have registered your website successfully");
                props.setCurrentStep(2)
            }else{
                setMessage(response.data.message);
            }
        }else{

        }
        */
    }

    const verifyPasswords = (password, confirmPassword) => {
        if(password === confirmPassword){
            return true;
        }else{
            setMessage("your passwords are not identical");
            return false;
        }
    }

    const handleChangeCompanyName = (userInput) => {
        setCompanyName(userInput)
    }

    const handleChangeRoleInCompany = (userInput) => {
        setRoleInCompany(userInput)
    }

    const handleChangeCompanyDomain = (userInput) => {
        console.log(userInput)
        setCompanySubDomain(userInput)
    }

    const handleChangeBusinessMain = (userInput) => {
        setBusinessMail(userInput)
    }

    const handleChangePhone = (userInput) => {
        setPhone(userInput)
    }

    const handleChangePassword = (userInput) => {
        setPassword(userInput)
    }

    const handleChangeConfirmPassword = (userInput) => {
        setConfirmPassword(userInput)
    }

    const handleChangeCheckBox= () => {
        setChecked(!checked)
    }

    const clearInputs = () => {
        setCompanySubDomain('');
        setBusinessMail('');
        setPassword('');
        setConfirmPassword('');
        setMessage('');
    }

    return (
        <div class="row justify-content-center">
            <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">{t(`form.signup`)}</p>

                <form class="mx-1 mx-md-4" onSubmit={handleSubmit}>

                    { message !== '' ? <h3 className="text-danger">{message}</h3> : <></>}

                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                            <input type="text" id="company_name" value={companyName} onChange={(e)=> {handleChangeCompanyName(e.target.value)}} class="form-control" placeholder={t(`form.company_name`)} required/>
                        </div>
                    </div>

                    <div class="form-check form-check-inline ms-1 mb-4 w-100">
                        <div class="dropdown">
                            <button class="btn btn-secondary btn-light dropdown-toggle w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            {t(`form.role`)}
                            </button>
                            <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="javascript:void();"> {t(`form.manager`)}</a></li>
                                <li><a class="dropdown-item" href="javascript:void();">{t(`form.developer`)}</a></li>
                                <li><a class="dropdown-item" href="javascript:void();">{t(`form.hr`)}</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                            <input type="email" id="subdomain" value={companySubDomain} onChange={(e)=> {handleChangeCompanyDomain(e.target.value)}} class="form-control text-align-end" placeholder={t(`form.site_name_placeholder`)} />
                        </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                            <input type="email" id="business_main" value={businessMail} onChange={(e)=> {handleChangeBusinessMain(e.target.value)}} class="form-control" placeholder={t(`form.business_mail_placeholder`)} required/>
                        </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg  fa-fw"></i>
                        <div class="form-outline flex-fill ">
                            <PhoneInput
                                international
                                defaultCountry="EG"
                                countryCallingCodeEditable={false}
                                withCountryCallingCode={true}
                                placeholder={t(`form.phone_placeholder`)}
                                value={value}
                                flags={flags}
                                onChange={handleChangePhone}/>
                        </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                            <input type="password" id="password" value={password} onChange={(e)=> {handleChangePassword(e.target.value)}} class="form-control" placeholder={t(`form.password_placeholder`)} required/>
                        </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                            <input type="password" id="confirm_password" value={confirmPassword} onChange={(e)=> {handleChangeConfirmPassword(e.target.value)}} class="form-control" placeholder={t(`form.password_confirmation_placeholder`)} required/>
                        </div>
                    </div>

                    <div class="form-check form-check-inline ms-1 mb-4">
                        <input class="form-check-input mt-1" defaultChecked={checked} type="checkbox" id="checkbox" onChange={handleChangeCheckBox} />
                        <label class="form-check-label m-0 p-0" for="checkbox">
                            {t(`form.agree`)} <a href="javascript:void();">{t(`form.terms_and_service`)}</a>
                        </label>
                    </div>

                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4 w-100">
                         <button type="submit" onClick={handleSubmit}  class="btn btn-primary btn-lg btn-block">{t(`form.register`)}</button> 
                        {/* <a href="javascript:void();" className="btn btn-primary btn-large" onClick={() => { props.setCurrentStep(2) }}>{t(`form.register`)}</a> */}
                    </div>

                </form>

            </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Sample image" />
                </div>
            </div>
    )
}

export default Form;