import React from 'react';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'


export default class CProjects extends React.Component {
    render(){
        return(
            <div>
                <div className="ruby-container">
                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="route"
                        transitionEnterTimeout={600}
                        transitionAppearTimeout={600}
                        transitionLeaveTimeout={400}
                        transitionAppear={true}
                    >
                        <h1 className="ruby-title">C++ projects</h1>

                        <div className="ruby-projects c-projects">
                            <div className="inside-ruby-projects decypher"></div>
                            <div className="project-overlay c-project-overlay">
                                <h1>Decoder</h1>
                                <p className="change-white">Just give the cyphered text and the key, and watch the magic</p>
                            </div>
                        </div>
                        <div className="ruby-projects c-projects">
                            <div className="inside-ruby-projects fake-credit-cards"></div>
                            <div className="project-overlay c-project-overlay">
                                <h1>Credit Card Verifier</h1>
                                <p className="change-white">Detects fake Visa, American Express, and Master Card, credit cards.</p>
                            </div>
                        </div>

                        <div className="ruby-projects c-projects">
                            <div className="inside-ruby-projects exact-change"></div>
                            <div className="project-overlay c-project-overlay">
                                <h1>Exact Change</h1>
                                <p className="change-white">Get's the exact change of a transaction</p>
                            </div>
                        </div>

                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}