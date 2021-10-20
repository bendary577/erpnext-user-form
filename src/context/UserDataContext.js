import React, {createContext, useState, useContext} from 'react';


//--------------------------------------------Create the User Data Context ---------------------------------------

const UserDataContext = createContext({
  plan : '',
  setPlan : () => {},
  siteName : '',
  setSiteName : () => {},
  email : '',
  setEmail : () => {},
  sitePassword : '',
  setSitePassword : () => {}
});

//------------------------------------------- create the Auth Provider ----------------------------------------------
const UserDataProvider = ({children}) => {
 
  //the AuthContext start with loading equals true and stay like this, until the data be load from Async Storage
  const [plan, setPlan] = useState('');
  const [siteName, setSiteName] = useState('');
  const [email, setEmail] = useState('');
  const [sitePassword, setSitePassword] = useState('');


  return (
    //This component will be used to encapsulate the whole App, so all components will have access to the Context
    <UserDataContext.Provider value={{
                                plan,
                                setPlan,
                                siteName, 
                                setSiteName,
                                email, 
                                setEmail,
                                sitePassword, 
                                setSitePassword,
                                }}>
      {children}
    </UserDataContext.Provider>
  );
};

//----------------------------------------------------------- useAuth Hook ----------------------------------------
//A simple hooks to facilitate the access to the AuthContext and permit components to subscribe to AuthContext updates
const useUserData = () => {
    const context = useContext(UserDataContext);
    if (!context) {
      throw new Error('useUserData must be used within an UserDataProvider');
    }
    return context;
  }

export {UserDataContext, UserDataProvider, useUserData};