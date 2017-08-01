import React, { Component } from 'react';

import Home from './Home'


import {Route, Router, BrowserRouter, withRouter } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>

          <div>


            <Route exact path='/' component={Home} />

          </div>
      </BrowserRouter>
    );
  }
}
