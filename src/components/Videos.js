import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import '../assets/stylesheets/videos.css'
import { NavLink } from 'react-router-dom'

export default class Videos extends React.Component {

    render(){
        return (
            <div className="Video-container">

                    <div id="wrapper">
                        <ReactCSSTransitionGroup
                            component="div"
                            transitionName="change"
                            transitionEnterTimeout={6000}
                            transitionAppearTimeout={2000}
                            transitionLeaveTimeout={4000}
                            transitionAppear={true}
                        >
                            <div style={{background:"linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.9)), url(https://www.octaneseating.com/wp-content/uploads/2017/04/old-movie-headerV2.jpg) center center no-repeat", backgroundSize:"cover"}} className="video-header">
                                <h1>Check Us Out</h1>

                            </div>
                        </ReactCSSTransitionGroup>
                        <div  style={{zIndex: 999999999999999999999999}} className="loader-container about-loader">



                        </div>
                        <div id="columns">


                            <div className="pin">
                                <iframe src="https://www.youtube.com/embed/CHKtCes8fFk" frameborder="0" allowfullscreen></iframe>
                                <p>
                                     Drum performance by Maurice.
                                </p>
                            </div>
                            <div className="pin">
                                <iframe src="https://www.youtube.com/embed/M8ph_7XFNX8" frameborder="0" allowfullscreen></iframe>
                                <p>
                                    Drum performance by Maurice
                                </p>
                            </div>
                            <div className="pin">
                                <iframe src="https://www.youtube.com/embed/Z8PSvtto3Ig" frameborder="0" allowfullscreen></iframe>
                                <p>
                                    Rap performance.
                                </p>
                            </div>



                            <div className="pin">
                                <iframe src="https://www.youtube.com/embed/jhO8-tNxzg4" frameborder="0" allowfullscreen></iframe>
                                <p>
                                    Singing performance.
                                </p>
                            </div>


                            <div className="pin">
                                <iframe src="https://www.youtube.com/embed/1LPs9nhFYEM" frameborder="0" allowfullscreen></iframe>
                                <p>
                                    Electric Drum performance by Maurice.
                                </p>
                            </div>


                        </div>
                    </div>
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



