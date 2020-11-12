import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from '../views/home/home'
import Contact from '../views/contact/contact'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default Routes;