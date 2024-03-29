import React, { Component } from "react";
import {Route, Redirect, Switch} from 'react-router-dom';
import Movies from "./components/movies";
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/common/navBar';
import LoginForm from './components/loginForm';
import "./App.css";
import MovieForm from './components/movieForm';
class App extends Component {
  render() {
    return (
      <React.Fragment>
      <NavBar/>
      <Switch>
        <Route path='/movies/:id' component={MovieForm}></Route>
        <Route path='/movies' component={Movies}/>
        <Route path='/login' component={LoginForm}/>
        <Route path='/customers' component={Customers}/>
        <Route path='/rentals' component={Rentals}/>
        <Route path='/not-found' component={NotFound}/>
        <Redirect from='/' exact to='/movies'/>
        <Redirect to='/not-found'/>

      </Switch>
      </React.Fragment>
    );
  }
}

export default App;
