import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import { NavLink } from 'react-router-dom'

export default class Mainnav extends React.Component {

    render(){

        return (

            <div>

                    <div className="main-nav">
                        <div style={{zIndex: 9999999999999999999999999999999999999999999999999999999999999999999999}} className="dropdown">
                            <i className="fa fa-times" aria-hidden="true"></i>
                            <h2><NavLink style={{color:"black"}} to="/">Home</NavLink></h2>
                            <h2><NavLink style={{color:"black"}}  to="/about">About</NavLink></h2>
                            <h2><a style={{color:"black"}}  href="contact.html">Booking</a></h2>

                        </div>
                        <i style={{fontSize: "30px"}} className="fa fa-bars" aria-hidden="true"/>

                        <NavLink to="/"><img src={require("../assets/logo.png")}/></NavLink>
                        <ul style={{marginTop: "12px"}}>
                            <li><NavLink exact activeClassName="nav-active" to="/">Home</NavLink></li>
                            <li><NavLink activeClassName="nav-active" to="/about">About</NavLink></li>
                            <li><a href="contact.html">Booking</a></li>
                        </ul>
                    </div>
            </div>

        )
    }
}



