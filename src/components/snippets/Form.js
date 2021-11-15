import React, {useState} from 'react';
import {register} from '../../services/requests';
import { useTranslation } from 'react-i18next';
import PhoneInput, { parsePhoneNumber } from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import {useUserData} from '../../context/UserDataContext';
import 'react-phone-number-input/style.css';
import RequestLoading from '../loading/RequestLoading';

const Form = (props) => {

    const [companyName, setCompanyName] = useState('');
    const [roleInCompany, setRoleInCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState();
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation();
    //set user data in the context
    const { plan, siteName, setSiteName, email, setEmail,sitePassword, setSitePassword} = useUserData();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let validation = verifyPasswords();
        if(validation){
            setSiteName(setSiteName)
            setEmail(email)
            setSitePassword(sitePassword)
            let data = {
                company_name : companyName,
                role : roleInCompany,
                site_name : siteName,
                email : email,
                phone,
                plan
            }
            setLoading(true);
            let response = await register(data);
            setMessage(response.data.message);
            if(response.status === 200){
                props.setCurrentStep(2)
            }
            setLoading(false);
        }else{

        }
    }

    const verifyPasswords = () => {
        if(sitePassword === confirmPassword){
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

    const handleChangeSiteName = (userInput) => {
        setSiteName(userInput)
    }

    const handleChangeEmail = (userInput) => {
        setEmail(userInput)
    }

    const handleChangePhone = (userInput) => {
        setPhone(userInput)
    }

    const handleChangeSitePassword = (userInput) => {
        setSitePassword(userInput)
    }

    const handleChangeConfirmPassword = (userInput) => {
        setConfirmPassword(userInput)
    }

    const handleChangeCheckBox= () => {
        setChecked(!checked)
    }

    return (
        loading === false ? 

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
                            <input type="text" id="subdomain" value={siteName} onChange={(e)=> {handleChangeSiteName(e.target.value)}} class="form-control text-align-end" placeholder={t(`form.site_name_placeholder`)} required/>
                        </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                            <input type="email" id="email" value={email} onChange={(e)=> {handleChangeEmail(e.target.value)}} class="form-control" placeholder={t(`form.business_mail_placeholder`)} required/>
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
                            <input type="password" id="password" value={sitePassword} onChange={(e)=> {handleChangeSitePassword(e.target.value)}} class="form-control" placeholder={t(`form.password_placeholder`)} required/>
                        </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                            <input type="password" id="confirm_password" value={confirmPassword} onChange={(e)=> {handleChangeConfirmPassword(e.target.value)}} class="form-control" placeholder={t(`form.password_confirmation_placeholder`)} required/>
                        </div>
                    </div>

                    <div class="form-check form-check-inline ms-1 mb-4">
                        <input class="form-check-input mt-1" defaultChecked={checked} type="checkbox" id="checkbox" onChange={handleChangeCheckBox} required/>
                        <label class="form-check-label m-0 p-0" for="checkbox">
                            {t(`form.agree`)} <a href="javascript:void();">{t(`form.terms_and_service`)}</a>
                        </label>
                    </div>

                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4 w-100">
                         <button type="submit" class="btn btn-primary btn-lg btn-block">{t(`form.register`)}</button> 
                    </div>

                </form>

            </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Sample image" />
                </div>
            </div>
        :
        <RequestLoading />
    )
}

export default Form;