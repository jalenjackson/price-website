import React from 'react'
import '../assets/stylesheets/about.css';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'


export default class AboutMe extends React.Component {
    render(){
        return (
            <div>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="product"
                    transitionEnterTimeout={600}
                    transitionAppearTimeout={600}
                    transitionLeaveTimeout={400}
                    transitionAppear={true}
                >
                <div className="about-me">
                    <h1>Hey My Name Is Jalen Jackson</h1>
                    <p className="aboutp">Front End Developer</p>
                    <img className="about-img" src={require("../assets/images/me.JPG")}/>

                    <p className="about-description">My name is Jalen Jackson. I am 20 years old, and i am a front end developer. I'm really good at Ruby On Rails, Ruby, HTML, CSS, SASS, Javascript / ES6, jQuery, Ajax, Ajax with Rails, Action Cable, AWS S3, Heroku, ERB, PostgreSQL, SQLite. Although i can write back end code i have the most fun writing front end code, which is why i would label myself as a front end developer. When i'm not coding i enjoy going to conferences, and meeting others who love to code. Call me at 678-205-9497 or email me at jalenjack201@hotmail.com :)   </p>
                </div>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}