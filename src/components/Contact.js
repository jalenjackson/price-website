import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import '../assets/stylesheets/contact.css'

export default class Contact extends React.Component {

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
                <h1>Contact</h1>

                <h1>404-858-1453</h1>

                <button className="btn draw-border"><a href="mailto:mrprice.mp@gmail.com?Subject=Booking%Inquiry" target="_top">Contact For Booking</a></button>
                </ReactCSSTransitionGroup>
            </div>

        )
    }
}



