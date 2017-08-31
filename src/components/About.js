import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import '../assets/stylesheets/contact.css'
import { NavLink } from 'react-router-dom'


export default class About extends React.Component {

    render(){
        return (
            <div className="about-container">
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="change"
                    transitionEnterTimeout={6000}
                    transitionAppearTimeout={2000}
                    transitionLeaveTimeout={4000}
                    transitionAppear={true}
                >
                    <div style={{zIndex: 999999999999999999999999}} className="loader-container about-loader">



                    </div>
                    <div  className="about-image video-img">
                        <h1 style={{color: "white"}}>About</h1>
                    </div>

                    <h2>We are Calvin Productions</h2>

                    <p>
                        Thank you for visiting Calvin Productions! We are an experienced team of professional musicians waiting to play at your newest event. Book one of our talented musicians to play at your event in the booking section of the website. Simply fill out the form, and we will get back to you regarding the next steps. Whether you need a drummer for a church gathering or a singer for a wedding, we have you covered!
                    </p>


                </ReactCSSTransitionGroup>
                <div className="footer">
                    <img src={require("../assets/logo.png")}/>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/videos">Videos</NavLink></li>
                        <li><a href="contact.html">Booking</a></li>
                    </ul>
                </div>
            </div>

        )
    }
}



