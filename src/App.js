import React,{ useEffect }  from 'react'; 
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SubscriptionPlans from '../src/screens/SubscriptionPlans';
import UserForm from '../src/screens/UserForm';
import EInvoice from './screens/EInvoice';
import ZakatAuthority from './screens/ZakatAuthority';
import WOW from 'wowjs';


function App() {

  useEffect(()=>{
    initWowJs();
  }, [])

  const initWowJs = () => {
      new WOW.WOW({
        live: false
    }).init();
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <UserForm />
          </Route>

          <Route exact path="/e-invoice">
            <EInvoice />
          </Route>

          <Route exact path="/subscription-plans">
            <SubscriptionPlans />
          </Route>

          <Route exact path="/zakat-authority">
            <ZakatAuthority />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
