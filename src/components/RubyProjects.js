import React from 'react'
import '../assets/stylesheets/ruby.css';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'


export default class RubyProjects extends React.Component {
    render(){
        return(
            <div className="ruby-container">
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="product"
                    transitionEnterTimeout={600}
                    transitionAppearTimeout={600}
                    transitionLeaveTimeout={400}
                    transitionAppear={true}
                >
                <h1 className="ruby-title">Ruby on rails projects</h1>

                <div className="ruby-projects">
                    <div className="inside-ruby-projects chalkboard"></div>
                    <div className="project-overlay ruby-project-overlay">
                        <h1>Chalkboard</h1>
                        <p>Chalkboard is a project that I have been working on massively. It is built with Ruby on Rails , Javascript, JQuery , PostgreSQL, and a lot more. Chalkboard is a mixture of youtube.com , medium.com , slack.com, Podomatic.com , Facebook.com, and meetup.com .</p>
                    </div>

                </div>
                <div className="ruby-projects">
                    <div className="inside-ruby-projects hair-obsessionz"></div>
                    <div className="project-overlay ruby-project-overlay">
                        <h1>Hair Obsessionz</h1>
                        <p>A fully featured Eccomerce website with paypal functionality. </p>
                    </div>
                </div>
                <div className="ruby-projects">
                    <div className="inside-ruby-projects tellafiction"></div>
                    <div  className="project-overlay ruby-project-overlay">
                        <h1>TellAFiction</h1>
                        <p>Engaging Story Telling</p>
                    </div>
                </div>
                    <div className="ruby-projects">
                        <div className="inside-ruby-projects tellafiction"></div>
                        <div  className="project-overlay ruby-project-overlay">
                            <h1>Rails Airplane Game</h1>
                            <p>I'm working on an airplane game that utilizes web sockets to communicate. </p>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}