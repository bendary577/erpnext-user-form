import React, {useState, useEffect} from 'react';
import {useUserData} from '../context/UserDataContext';
import installationImage from '../assets/images/form/installing.png';
import {installERPNexto} from '../services/requests';
import InstallationLoading from '../components/loading/InstallationLoading';

const SiteInstallation = () => {

    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const {siteName, email, plan, sitePassword} = useUserData();
    const link = `http://${siteName}.erpnexto.com:8000/`

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
        let response = await installERPNexto(data);
        if(response){
            if(response.status === 200){
                setMessage(response.data.message);
            }else{
                setMessage(response.data.message);
            }
            setLoading(false);
        }
    }
    
    return (

        <div className="site_installation_div" style={{"height":"700px"}}>
            <div>
                
                {
                loading === true ?
                    <>
                        <div className="">
                            <h1 className="font-weight-bold">Your site is being installed right now</h1>
                            <h4 className="font-weight-bold my-3">please be patient, this may take a few minutes</h4>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={installationImage} style={{width:'570px', height:'400px'}} class="" alt="" />
                        </div>
                        <InstallationLoading />
                    </>
                :
                <>
                    <div className="">
                        <h1 className="font-weight-bold my-3">Congratulations !!</h1>
                    </div>
                    <h2>You can visit your <a href={link}>website</a> now</h2>
                </>
                }
            </div>
        </div>
    )
}

export default SiteInstallation;