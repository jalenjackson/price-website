import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class ReactPage extends React.Component {
    render(){
        return (
            <div className="ruby-container">
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="product"
                    transitionEnterTimeout={600}
                    transitionAppearTimeout={600}
                    transitionLeaveTimeout={400}
                    transitionAppear={true}
                >
                    <h1 className="ruby-title">React.js projects</h1>

                    <div className="ruby-projects react-projects">
                        <div className="inside-ruby-projects youtube"></div>
                        <div className="project-overlay">
                            <h1>React + Youtube</h1>
                            <p className="change-white">Combining the youtube search api with react for faster searching.</p>
                        </div>
                    </div>
                    <div className="ruby-projects react-projects">
                        <div className="inside-ruby-projects personal-website"></div>
                        <div className="project-overlay">
                            <h1>This Website</h1>
                            <p className="change-white">My Personal Website is built in React</p>
                        </div>
                    </div>

                </ReactCSSTransitionGroup>
            </div>
        )
    }
}