import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from '../views/home/home'
import About from '../views/about/About'
import Contact from '../views/contact/contact'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default Routes;