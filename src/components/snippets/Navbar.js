import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../buttons/LanguageSwitcher';
import '../../assets/css/navbar.css';

const Navbar = () => {
    const { t } = useTranslation();
    return (
        <div className="navbar_div">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#"><strong>{t(`navbar.brand`)}</strong></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link nav_link" href="https://cselection.com"></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="https://cselection.com">{t(`navbar.website`)}</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="subscription-plans">{t(`navbar.subscription_plans`)}</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="e-invoice">{t(`navbar.e_invoice`)}</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="zakat-authority">{t(`navbar.zakat`)}</a>
                    </li>
                    <li class="nav-item active mx-2 mt-2">
                        <LanguageSwitcher />
                    </li>
                    {/*
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    */}

                    </ul>
                    {/*
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    */}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;