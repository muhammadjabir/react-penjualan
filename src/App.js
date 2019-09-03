import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import './App.css';
import registrasi from './pages/registrasi';
import login from './pages/login';
import lupaPassword from './pages/lupa-password';
import notFound from './pages/404';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/registrasi" component={registrasi}/>
      <Route path="/login" component={login}/>
      <Route path="/lupa-password" component={lupaPassword}/>
      <Route component={notFound}/>
      </Switch>
    </Router>
  );
}

export default App;
