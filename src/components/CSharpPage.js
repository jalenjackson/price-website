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
                    <h1 className="ruby-title">C# Projects</h1>

                    <div className="ruby-projects react-projects">
                        <div className="inside-ruby-projects augmented-reality"></div>
                        <div className="project-overlay">
                            <h1>GameCam Augmented Reality</h1>
                            <p>An augmented reality app were if you point your camera to a game cover it plays the trailer of the game. If you tap once you go to the ratings of the game. If you double tap you go to were you can buy the game</p>
                        </div>
                    </div>

                </ReactCSSTransitionGroup>
            </div>
        )
    }
}