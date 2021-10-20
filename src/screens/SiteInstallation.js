import React, {useState, useEffect} from 'react';
import {useUserData} from '../context/UserDataContext';
import installationImage from '../assets/images/form/installing.png';
import {installERPNexto} from '../services/requests';

const SiteInstallation = () => {

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const {siteName, email, plan, sitePassword} = useUserData();

    useEffect(()=>{
        startERPNextoInstallation();
    }, [])

    const startERPNextoInstallation = async () => {
        let data = {
            site_name : siteName,
            password : sitePassword,
            email,
            plan,
        }
        setLoading(true);
        let response = await installERPNexto(data);
        if(response.status === 200){
            setMessage("you have completed your website successfully");
        }else{
            setMessage(response.data.message);
        }
        setLoading(false);
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