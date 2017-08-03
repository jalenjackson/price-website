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
                    <div className="about-image">
                        <h1>About</h1>
                    </div>

                    <h2>Lorem Ipsum</h2>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>


                </ReactCSSTransitionGroup>
                <div className="footer">
                    <img src={require("../assets/logo.png")}/>
                    <ul>
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



