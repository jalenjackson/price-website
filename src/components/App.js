import React, { Component } from 'react';

import Home from './Home'
import Videos from './Videos'
import Mainnav from './Mainnav'
import Pictures from './Pictures'
import Contact from './Contact'
import Gigs from './Gigs'
import About from './About'


import {Route, Router, BrowserRouter, withRouter } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>

          <div>
            <Mainnav/>
              <Route exact path='/gigs' component={Gigs} />
              <Route exact path='/about' component={About} />

              <Route exact path='/contact' component={Contact} />
              <Route exact path='/' component={Home} />
            <Route exact path='/videos' component={Videos} />
            <Route exact path='/pictures' component={Pictures} />
          </div>
      </BrowserRouter>
    );
  }
}
