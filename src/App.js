import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import CountryDetail from './Components/CountryDetail/CountryDetail';



function App() {

    
  return (
    <div className="App-header">
      <Router>
        <Switch>
          <Route path="/home">
             <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/country/:countryName">
              <CountryDetail></CountryDetail>
          </Route>
          <Route path="*">
              <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
       
    </div>
  );
}

export default App;
