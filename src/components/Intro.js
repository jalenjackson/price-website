import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Intro extends React.Component {
    render(){
        return (
            <div>

                <div className="intro-container">

                    <video autoPlay={true}  width="320" height="240" controls={false} muted={true}>
                        <source src={require("../assets/video.webm")} type="video/webm"/>
                    </video>

                </div>
            </div>
        )
    }
}


