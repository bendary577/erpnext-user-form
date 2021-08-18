import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SubscriptionPlans from '../src/screens/SubscriptionPlans';
import UserForm from '../src/screens/UserForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <UserForm />
          </Route>

          <Route exact path="/subscription-plans">
            <SubscriptionPlans />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
