import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import '../assets/stylesheets/home.css'

export default class Home extends Component {
    render(){
        return (
           <div>

            <section id="banner">
                <video className="video-bg" loop={true} autoPlay={true}>
                    <source src={require("../assets/images/loop.mp4")} type="video/mp4"/>
                </video>

            <h1 className="jj">Jalen Jackson</h1>
        <p className="desc" style={{color:"white !important"}}>Front End Developer</p>

            </section>

           </div>
        )
    }
}