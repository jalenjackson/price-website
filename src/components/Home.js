import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import { NavLink } from 'react-router-dom'

export default class Home extends React.Component {

    render(){

        return (

            <div>

                <div className="real-home-container">





                                <div style={{height: "100%"}} className="header-container change1">
                                    <div className="change1-overlay"></div>
                                    <div className="left-text-container">

                                        <h1 className="parallax responsive-h1"><img className="header-img" src={require("../assets/logo.png")} /> <br/> <span className="design-word">PRODUCTIONS</span> <br/> </h1>

                                    </div>
                                </div>

                    <div style={{zIndex: 999999999999999999999999}} className="loader-container">



                    </div>


                </div>
            </div>
               
        )
    }
}



