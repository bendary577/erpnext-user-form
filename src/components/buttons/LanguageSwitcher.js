import React from "react";
import { useTranslation } from "react-i18next";
import egypt from "../../assets/icons/navbar/egypt.png";
import britain from "../../assets/icons/navbar/britain.png";

const LanguageSwitcher = ()=> {

    const { t, i18n } = useTranslation();
    const langIconStyle = {
        width : "25px",
        height : "25px"
    }

    const changeLanguage = (lang) => {
        i18n.changeLanguage( lang, ()=>{
            //change html layout dependent on user selected language
            document.getElementById('body').setAttribute("lang", i18n.language);
            document.getElementById('body').setAttribute("dir", i18n.language === "en" ? "ltr" : "rtl");
            document.getElementById('body').setAttribute("class", i18n.language === "en" ? "text-left" : "text-right");
            localStorage.setItem('language', lang);
        })
    }

    return (
    /* <div className="language_switcher_div mt-2" >  
            <a href="javascript:void(0);" onClick={()=>changeLanguage()}>
                <img src={i18n.language === "ar" ? britain :  egypt } style={langIconStyle} className="" alt="language" />
            </a>
        </div> */
        <div class="dropdown">
            <a style={{"text-decoration" : "none", "cursor": "pointer"}} class="dropdown-toggle link-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {t(`navbar.change_language`)}
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#" onClick={()=>changeLanguage('ar')} href="#">{t(`navbar.arabic`)}</a></li>
                <li><a class="dropdown-item" href="#" onClick={()=>changeLanguage('en')} href="#">{t(`navbar.english`)}</a></li>
            </ul>
        </div>
    );
}

export default LanguageSwitcher;