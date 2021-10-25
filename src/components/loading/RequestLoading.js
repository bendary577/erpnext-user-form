import React from 'react';
import Loader from "react-loader-spinner";

import { useTranslation } from 'react-i18next';

const RequestLoading = (props) => {

    const { t } = useTranslation();

    return (
        <div className="request_loading_div d-flex justify-content-center align-items-center" style={{"height":"500px"}}>
            <Loader type="Circles" color="#00BFFF" height={300} width={300}  />
        </div>
    )
}   

export default RequestLoading;