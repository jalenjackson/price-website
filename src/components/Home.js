import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

var show = false;
export default class Chalkboard extends React.Component {

    render(){

        return (

            <div>



                <div className="real-home-container">
                <div style={{background:"linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.9)) , url(http://s1.picswalls.com/wallpapers/2015/10/11/hd-sci-fi-wallpapers_010015608_283.jpg) center center no-repeat", overflow: "hidden", backgroundSize: "cover"}} className="home-container">


                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="route"
                        transitionEnterTimeout={6000}
                        transitionAppearTimeout={2000}
                        transitionLeaveTimeout={4000}
                        transitionAppear={true}
                    >

                        <div style={{background: "url('http://www.adrenalinmedia.com.au/Upload/AdrenalinMedia/Media/Insights/2015-05-Animated%20Interfaces/benefits03.gif') center center no-repeat", backgroundSize: "cover", filter: "grayscale(100%)"}} className="overlay-ani"></div>
                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="new"
                        transitionEnterTimeout={6000}
                        transitionAppearTimeout={8000}
                        transitionLeaveTimeout={4000}
                        transitionAppear={true}
                    >

                        <h1><span>Jalen Jackson</span></h1>
                        <h1><span>Front End Developer</span></h1>

                    </ReactCSSTransitionGroup>

                </div>
            </div>
            </div>
        )
    }
}



