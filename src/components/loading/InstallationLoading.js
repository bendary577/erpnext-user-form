import React from 'react';
import Loader from "react-loader-spinner";

import { useTranslation } from 'react-i18next';

const InstallationLoading = (props) => {

    const { t } = useTranslation();

    return (
        <div className="request_loading_div d-flex justify-content-center align-items-center">
            <Loader type="Ball-Triangle" color="#00BFFF" height={200} width={200}  />
        </div>
    )
}   

export default InstallationLoading;