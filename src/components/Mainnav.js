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
                            <h2><NavLink style={{color:"black"}}  to="/videos">Videos</NavLink></h2>
                            <h2><NavLink style={{color:"black"}}  to="/pictures">Pictures</NavLink></h2>
                            <h2><NavLink style={{color:"black"}}  to="/gigs">Gigs</NavLink></h2>
                            <h2><NavLink style={{color:"black"}}  to="/contact">Contact</NavLink></h2>
                        </div>
                        <i style={{fontSize: "30px"}} className="fa fa-bars" aria-hidden="true"/>

                        <img src={require("../assets/logo.png")}/>
                        <ul style={{marginTop: "12px"}}>
                            <li><NavLink exact activeClassName="nav-active" to="/">Home</NavLink></li>
                            <li><NavLink activeClassName="nav-active" to="/about">About</NavLink></li>
                            <li><NavLink activeClassName="nav-active" to="/videos">Videos</NavLink></li>
                            <li><NavLink activeClassName="nav-active" to="/pictures">Pictures</NavLink></li>
                            <li><NavLink activeClassName="nav-active" to="/gigs">Gigs</NavLink></li>
                            <li><NavLink activeClassName="nav-active" to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
            </div>

        )
    }
}



