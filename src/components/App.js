import React, { Component } from 'react';

import Nav from './nav'
import Home from './Home'
import {Route, Router, BrowserRouter, withRouter } from 'react-router-dom'
import ProductPage from './ProductPage'
import VideoPlayer from './VideoPlayer'
import RubyProjects from './RubyProjects'
import ReactPage from './ReactPage'
import CProjects from './CProjects'
import HtmlPage from './HtmlPage'
import CSharpPage from './CSharpPage'
import AboutMe from './AboutMe'
import ToolsIUse from './ToolsIUse'

import ReallySmoothScroll from 'really-smooth-scroll'



//ReallySmoothScroll.shim();


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              <VideoPlayer/>

                <Nav/>
            <Route exact path='/' component={Home}/>
            <Route path='/music' component={ProductPage} />
            <Route path='/ruby' component={RubyProjects} />
            <Route path='/react' component={ReactPage} />
            <Route path='/c' component={CProjects} />
            <Route path='/htmlcss' component={HtmlPage} />
            <Route path='/csharp' component={CSharpPage} />
            <Route path='/about' component={AboutMe} />
            <Route path='/tools' component={ToolsIUse} />


        </div>
      </BrowserRouter>
    );
  }
}

