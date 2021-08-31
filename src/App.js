import React,{ useEffect }  from 'react'; 
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SubscriptionPlans from '../src/screens/SubscriptionPlans';
import UserForm from '../src/screens/UserForm';
import EInvoice from './screens/EInvoice';
import ZakatAuthority from './screens/ZakatAuthority';
import WOW from 'wowjs';
import { FloatingButton, Item } from "react-floating-button";
import icon from './assets/icons/zakat/kaaba.png';
import { useTranslation } from "react-i18next";
import PaymentForm from './screens/PaymentForm';


function App() {

  const { i18n } = useTranslation();

  useEffect(()=>{
    initLanguage();
    initWowJs();
  }, [])


  const initLanguage = () => {
    //set html layout dependent on user selected language
    document.getElementById('body').setAttribute("lang", i18n.language);
    document.getElementById('body').setAttribute("dir", i18n.language === "en" ? "ltr" : "rtl");
    document.getElementById('body').setAttribute("class", i18n.language === "en" ? "text-left" : "text-right");
    localStorage.setItem('language', i18n.language);
  }

  const initWowJs = () => {
      new WOW.WOW({
        live: false
    }).init();
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path="/form">
            <UserForm />
          </Route>

          <Route exact path="/e-invoice">
            <EInvoice />
          </Route>

          <Route exact path={["/", "/subscription-plans"]}>
            <SubscriptionPlans />
          </Route>

          <Route exact path="/zakat-authority">
            <ZakatAuthority />
          </Route>

          <Route exact path="/payment-form">
            <PaymentForm />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
