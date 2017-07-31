import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Intro extends React.Component {
    render(){
        return (
            <div>
                <div style={{zIndex: "999999999999999999999999999999999999"}} className="intro-container">

                    <video style={{zIndex: "999999999999999999999999999999999999"}} autoPlay={true}  width="320" height="240" controls={false} muted={true}>
                        <source src={require("../assets/video.webm")} type="video/webm"/>
                    </video>

                </div>
            </div>
        )
    }
}


