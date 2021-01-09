import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Orders from './Orders';

export default function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/orders">
          <Orders />
        </Route>
      </Switch>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
