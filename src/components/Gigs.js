import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import '../assets/stylesheets/videos.css'
import { NavLink } from 'react-router-dom'


export default class Gigs extends React.Component {

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
                        <div style={{background:"linear-gradient(rgba(0,0,200,0.2), rgba(100,0,100,0.9)), url(https://iso.500px.com/wp-content/uploads/2015/07/lombardo_cover.jpeg) center center no-repeat", backgroundSize:"cover"}} className="video-header">
                            <h1>Gigs</h1>

                        </div>
                    </ReactCSSTransitionGroup>
                    <div style={{zIndex: 999999999999999999999999}} className="loader-container about-loader">



                    </div>

                    <div className="l-g3">
                        <div className="l-g3-div" style={{background: "url(https://eevents.s3.amazonaws.com/images/og/concert.jpg) center center no-repeat", backgroundSize: "cover"}}>
                            <div className="l-g3-overlay">
                                <h1>Title</h1>
                                <p>Description</p>
                            </div>
                        </div>
                        <div className="l-g3-div" style={{background: "url(https://eevents.s3.amazonaws.com/images/og/concert.jpg) center center no-repeat", backgroundSize: "cover"}}>
                            <div className="l-g3-overlay">
                                <h1>Title</h1>
                                <p>Description</p>
                            </div>
                        </div>
                        <div className="l-g3-div" style={{background: "url(https://eevents.s3.amazonaws.com/images/og/concert.jpg) center center no-repeat", backgroundSize: "cover"}}>
                            <div className="l-g3-overlay">
                                <h1>Title</h1>
                                <p>Description</p>
                            </div>
                        </div>
                        <div className="l-g3-div" style={{background: "url(https://eevents.s3.amazonaws.com/images/og/concert.jpg) center center no-repeat", backgroundSize: "cover"}}>
                            <div className="l-g3-overlay">
                                <h1>Title</h1>
                                <p>Description</p>
                            </div>
                        </div>
                        <div className="l-g3-div" style={{background: "url(https://eevents.s3.amazonaws.com/images/og/concert.jpg) center center no-repeat", backgroundSize: "cover"}}>
                            <div className="l-g3-overlay">
                                <h1>Title</h1>
                                <p>Description</p>
                            </div>
                        </div>
                        <div className="l-g3-div" style={{background: "url(https://eevents.s3.amazonaws.com/images/og/concert.jpg) center center no-repeat", backgroundSize: "cover"}}>
                            <div className="l-g3-overlay">
                                <h1>Title</h1>
                                <p>Description</p>
                            </div>
                        </div>


                    </div>
                </div>

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



