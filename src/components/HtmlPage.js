import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class ReactPage extends React.Component {
    render(){
        return (
            <div className="ruby-container">
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="route"
                    transitionEnterTimeout={600}
                    transitionAppearTimeout={600}
                    transitionLeaveTimeout={400}
                    transitionAppear={true}
                >
                    <h1 className="ruby-title">Static Projects</h1>

                    <div className="ruby-projects react-projects">
                        <div className="inside-ruby-projects vartgo"></div>
                        <div className="project-overlay">
                            <h1>VRARTGO</h1>
                            <p>A wesbite i built for an aspiring animation company</p>
                        </div>
                    </div>

                </ReactCSSTransitionGroup>
            </div>
        )
    }
}