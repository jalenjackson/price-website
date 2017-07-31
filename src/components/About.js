import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Chalkboard extends React.Component {
    render(){
        return (
            <div>
                <div style={{zIndex: "999999999999999999999999999999999999"}} className="intro-container">

                    <video style={{zIndex: "999999999999999999999999999999999999"}} autoPlay={true}  width="320" height="240" controls={false} muted={true}>
                        <source src={require("../assets/video.webm")} type="video/webm"/>
                    </video>

                </div>
                <div style={{background:"linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.9)) , url(https://s-media-cache-ak0.pinimg.com/originals/b2/13/23/b21323492597bcd13e06b74dab18c7d9.jpg) center center no-repeat", overflow: "hidden"}} className="home-container">
                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="route"
                        transitionEnterTimeout={6000}
                        transitionAppearTimeout={2000}
                        transitionLeaveTimeout={4000}
                        transitionAppear={true}
                    >

                        <div style={{background: "url('http://www.adrenalinmedia.com.au/Upload/AdrenalinMedia/Media/Insights/2015-05-Animated%20Interfaces/benefits03.gif') center center no-repeat", backgroundSize: "cover", filter: "grayscale(100%)"}} className="overlay-ani"></div>
                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="new"
                        transitionEnterTimeout={6000}
                        transitionAppearTimeout={8000}
                        transitionLeaveTimeout={4000}
                        transitionAppear={true}
                    >
                        <h1 ><span className="about-h1">Hi, My name is Jalen</span></h1>
                        <p className="about-p">I have experience in Ruby On Rails, HTML, CSS / SASS, Javascript / ES6, jQuery, AWS S3, Heroku, ERB, SQLite, React.js , and augmented reality apps with C#</p>
                    </ReactCSSTransitionGroup>

                </div>
            </div>
        )
    }
}
