import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import { NavLink } from 'react-router-dom'


export default class MainNav extends React.Component {
    render(){
        return (
            <div>
                <div className="nav-container">
                    <NavLink to="/"> <img className="logo-img" src="http://logok.org/wp-content/uploads/2017/01/Juventus-logo-2017-350x302.png"/></NavLink>
                  <div className="inner-nav">
                  <NavLink className="about-me" activeClassName="about-link" to="/about">About Me</NavLink>
                  </div>
                    <a href="mailto:jalenjack201@hotmail.com?Subject=Web%20Inquiry" target="_top"><img className="email-logo" src="https://cdn0.iconfinder.com/data/icons/basic-thin-ios/512/email-512.png"/></a>

                </div>
            </div>
        )
    }
}
