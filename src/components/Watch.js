import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import '../assets/stylesheets/videos.css'
import {NavLink} from 'react-router-dom'

export default class Watch extends React.Component {

    render(){
        return (


            <ReactCSSTransitionGroup
                component="div"
                transitionName="video"
                transitionEnterTimeout={0}
                transitionAppearTimeout={1000}
                transitionLeaveTimeout={4000}
                transitionAppear={true}
            >
                    <div className="watch-container">

                        <video className="video-player" autoPlay={true} controls={true}>
                            <source src={require()} type="video/mp4"/>
                        </video>
                    </div>

                <NavLink to="/"><img className="video-image" src="https://api.icons8.com/download/6a145bf660d8bd09337d6169823882c8356a924c/iOS7/PNG/256/User_Interface/delete_sign-256.png"/></NavLink>
            </ReactCSSTransitionGroup>

        )
    }
}



