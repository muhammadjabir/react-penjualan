import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import './App.css';
import registrasi from './pages/registrasi';
import login from './pages/login';
import lupaPassword from './pages/lupa-password';
import notFound from './pages/404';
import Private from './pages/private';
import PrivateRoute from './pages/private/PrivateRoute'

function App() {
  return (
    <Router>
      <Switch>
      <PrivateRoute path='/pengaturan' component={Private}/>
      <PrivateRoute path='/transaksi' component={Private}/>
      <PrivateRoute path='/' exact component={Private}/>
      <Route path="/registrasi" component={registrasi}/>
      <Route path="/login" component={login}/>
      <PrivateRoute path="/product" component={Private}/>
      <Route path="/lupa-password" component={lupaPassword}/>
      <Route component={notFound}/>
      </Switch>
    </Router>
  );
}

export default App;
