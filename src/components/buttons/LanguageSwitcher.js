import React from "react";
import { useTranslation } from "react-i18next";
import egypt from "../../assets/icons/navbar/egypt.png";
import britain from "../../assets/icons/navbar/britain.png";

const LanguageSwitcher = ()=> {

    const { i18n } = useTranslation();
    const langIconStyle = {
        width : "25px",
        height : "25px"
    }

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
        //change html layout dependent on user selected language
        document.getElementById('body').setAttribute("lang", i18n.language);
        document.getElementById('body').setAttribute("dir", i18n.language === "en" ? "ltr" : "rtl");
        document.getElementById('body').setAttribute("class", i18n.language === "en" ? "text-left" : "text-right");
    }

    return (
        <div className="language_switcher_div mt-2" >  
            <a href="javascript:void(0);" onClick={()=>changeLanguage()}>
                <img src={i18n.language === "ar" ? britain :  egypt } style={langIconStyle} className="" alt="language" />
            </a>
        </div>
    );
}

export default LanguageSwitcher;