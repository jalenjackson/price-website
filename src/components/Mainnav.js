import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import { NavLink } from 'react-router-dom'

export default class Mainnav extends React.Component {

    render(){

        return (

            <div>
                <div style={{zIndex: 9999999999999999999999999999999999999999999999999999999999999999999999}} className="dropdown">
                    <i className="fa fa-times" aria-hidden="true"></i>
                    <ul style={{marginTop: "12px"}}>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/videos">Videos</NavLink></li>
                        <li><NavLink to="/pictures">Pictures</NavLink></li>
                        <li><NavLink to="/gigs">Gigs</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                    <div className="main-nav">
                        <i style={{fontSize: "30px"}} className="fa fa-bars" aria-hidden="true"/>

                        <img src={require("../assets/logo.png")}/>
                        <ul style={{marginTop: "12px"}}>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/videos">Videos</NavLink></li>
                            <li><NavLink to="/pictures">Pictures</NavLink></li>
                            <li><NavLink to="/gigs">Gigs</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
            </div>

        )
    }
}



