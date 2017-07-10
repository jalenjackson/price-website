import React, {Component} from 'react'
import '../assets/stylesheets/nav.css';
import {NavLink} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'


var divStyle = {
    color: 'black',
    fontSize: "40px",
};

export default class Nav extends Component {
    render(){
        return (
            <div>

                <div className="main-navbar">



                    <div className="design-line"></div>
                    <div className="left-side-nav-items">

                        <NavLink exact activeClassName='active' className="home-link"  to="/">Home</NavLink>
                        <a className="hover-link">Projects</a>
                        <NavLink  activeClassName="active" className="about-me-link change"  to="/about">About Me</NavLink>
                        <NavLink  activeClassName="active" className="fav-music change"  to="/music">Favorite Music</NavLink>


                        <NavLink  activeClassName="active" className="tools change"  to="/tools">Tools I Use</NavLink>

                    </div>

                </div>

                <div className="lower-overlay"></div>

                <div className="animated-dropdown">
                    <div className="pulldown-items">
                        <h1 style={{color:"black !important"}} className="animated-dropdown-h1  animated ">PROJECTS</h1>
                        <ul className="listOf-items-dropdown animated ">
                            <li className="project-li"><NavLink activeClassName="active" className="ruby-link nav-link change" to="/ruby">Ruby On Rails</NavLink></li>
                            <li className="project-li"><NavLink activeClassName="active" className="react-link nav-link change" to="/react">React Js</NavLink></li>
                            <li className="project-li"><NavLink activeClassName="active" className="c-link nav-link change" to="/c">C++</NavLink></li>
                            <li className="project-li"><NavLink activeClassName="active" className="html-link nav-link change" to="/htmlcss">HTML/CSS</NavLink></li>
                            <li className="project-li"><NavLink activeClassName="active" className="csharp-link nav-link change" to="/csharp">C# Augmented Reality</NavLink></li>
                        </ul>
                        <div className="animated-dropdown-image-container">


                            <img className="dropdown-side-img animated" src = "http://i.imgur.com/lRq6T7n.gif" />

                                <img className="dropdown-bg-img" src = "https://media.giphy.com/media/A06UFEx8jxEwU/giphy.gif" />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}