import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Projects extends React.Component {
    render(){
        return (
            <div>

                <a target="blank" href="https://pthealthcare.herokuapp.com/">
                    <div className="home-container">
                        <ReactCSSTransitionGroup
                            component="div"
                            transitionName="route"
                            transitionEnterTimeout={600}
                            transitionAppearTimeout={600}
                            transitionLeaveTimeout={400}
                            transitionAppear={true}
                        >
                            <h1><span>Projects</span></h1>
                            <h1 className="next"><span>Health Care</span></h1>
                            <h5>Visit <img src="http://www.freeiconspng.com/uploads/right-arrow-png-18.png"/></h5>
                        </ReactCSSTransitionGroup>

                        <ReactCSSTransitionGroup
                            component="div"
                            transitionName="sideImg"
                            transitionEnterTimeout={600}
                            transitionAppearTimeout={600}
                            transitionLeaveTimeout={400}
                            transitionAppear={true}
                        >
                            <img style={{height:"300px", marginLeft:"60px"}} className="home-bg" src="http://www.globalscape.co.uk/Content/images/solution-healthcare.png"/>
                        </ReactCSSTransitionGroup>
                    </div>
                </a>
            </div>
        )
    }
}
