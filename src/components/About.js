import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import '../assets/stylesheets/contact.css'

export default class About extends React.Component {

    render(){
        return (
            <div className="contact-container">
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="change"
                    transitionEnterTimeout={6000}
                    transitionAppearTimeout={2000}
                    transitionLeaveTimeout={4000}
                    transitionAppear={true}
                >
                    <h1>About</h1>


                </ReactCSSTransitionGroup>
            </div>

        )
    }
}



