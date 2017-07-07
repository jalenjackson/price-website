import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'


export default class Home extends Component {
    render(){
        return (
            <div>

                <ReactCSSTransitionGroup
                component="div"
                transitionName="route"
                transitionEnterTimeout={600}
                transitionAppearTimeout={600}
                transitionLeaveTimeout={400}
                transitionAppear={true}
            >
                <div className="move-down">
                    <div className="hot-products-container">

                        <div className="hot-product parallax-scroll1">
                            <img src = "http://cloudhop.it/images/articles/Blended-Learning.png"/>
                                <div className="hot-product-overlay ">
                                    <h1 className="parallax-scroll"><span>Chalkboard</span></h1>
                                    <h1 className="parallax-scroll"><span>Ruby On Rails</span></h1>
                                </div>

                        </div>
                        <div className="hot-product parallax-scroll2">
                            <div className="hot-product-overlay ">
                                <h1><span>TellAFiction</span></h1>
                                <h1><span >Ruby On Rails</span></h1>
                            </div>
                            <img src = "https://www.textedly.com/template/default/images/icon_mass_text.png"/>
                        </div>
                        <div className="hot-product parallax-scroll3">
                            <div className="hot-product-overlay">
                                <h1><span>GameCam</span></h1>
                                <h1><span>C# Vuforia</span></h1>
                            </div>
                            <img src = "https://foxtailmarketing.com/wp-content/uploads/2017/01/Augmented-Reality-Marketing.png"/>
                        </div>

                    </div>

                    <div className="main-hot-container">
                        <h1 className="parallax-scroll">Best Coding Song</h1>

                        <p style={{color:'black'}} className="parallax-scrollp">Although i enjoy JCole a lot, you have to change it up sometimes. Beethoven is my second favorite when listening to music and coding</p>
                        <button className="btn draw-border parallax-scrollp">Listen To It!</button>
                        <div style={{marginTop:"80px"}} className="underline2 parallax-scrollp"></div>

                        <div className="main-hot-side-img side-img">
                            <img src = "http://static1.squarespace.com/static/55951ce0e4b0c1a90569cfed/t/55983ce7e4b0b0193b97df1b/1436040427273/"/>
                        </div>

                        <div className="responsive-details">
                            <h1>Wale Shine Album</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <p className="responsive-rating">The 5 star rating</p>
                            <button className="responsive-view-btn">View</button>
                        </div>
                    </div>
                    <div className="whats-new">
                        <h1 className="whats-new-title">Projects In The Making</h1>

                        <div className="whats-new-layout-container">
                            <div className="whats-new-layout">
                                <img src = "http://blitzlift.com/wp-content/uploads/bl1348-1.png"/>
                                    <h1>Chalkboard</h1>
                                    <p> Chalkboard is a project that I have been working on massively. It is built with Ruby on Rails , Javascript, JQuery , PostgreSQL, and a lot more. Chalkboard is a mixture of youtube.com , medium.com , slack.com, Podomatic.com , Facebook.com, and meetup.com .</p>
                            </div>
                            <div className="whats-new-layout">
                                <img src = {require("../assets/images/hairObsessionz.png")}/>
                                    <h1>Hair Obsessionz</h1>
                                    <p> A fully featured Eccomerce website with paypal functionality</p>

                            </div>
                            <div className="whats-new-layout">
                                <img src = {require("../assets/images/youtube.png")}/>
                                    <h1>React + Youtube</h1>
                                    <p>Combining the youtube search api with react for faster searching.</p>

                            </div>
                            <div className="whats-new-layout">
                                <img src ={require("../assets/images/tellafiction.png")}/>
                                    <h1>TellAFiction</h1>
                                    <p>Engaging Story Telling</p>

                            </div>

                        </div>

                        <div className="whats-new-side-container">
                            <img src={require("../assets/images/vrartgo.png")}/>
                                <h1>VRARTGO</h1>
                                <p>I built this website a while ago for an aspiring animation company. It was a very fun experience writing the code, because they gave me creative freedom.</p>

                        </div>
                    </div>
                </div>

                <h1 className="top-product">Augmented Reality</h1>


                <div className="product-of-the-week">

                    <h1>GameCam</h1>
                    <p>An augmented reality app were if you point your camera to a game cover it plays the trailer of the game. If you tap once you go to the ratings of the game. If you double tap you go to were you can buy the game</p>
                    <div className="week-img-overlay">
                        <h1>GameCam</h1>
                    </div>

                    <div className="product-side-week">

                        <p>Augmented Reality</p>
                        <div className="week-img-container">
                            <iframe className="gameCam" width="560" height="315" src="https://www.youtube.com/embed/uwK_8PBjAfE" frameborder="0" allowfullscreen></iframe>

                        </div>
                    </div>


                </div>
                    <h1 style={{textAlign:"center", marginTop:"40px"}}>I started writing blogs!</h1>
                <div className="two-container">
                    <div style={{marginLeft:"50px", background: "rgb(220,220,250)" }} className="last-two-product-showcase">
                        <h1>Blog Post 1</h1>
                        <img src = "https://cdn-images-1.medium.com/max/2000/1*FYYeO7ZaS9bqe0D29vF5XA.jpeg"/>
                    </div>

                    <div style={{background:"rgb(222,184,135)"}} className="last-two-product-showcase">
                        <h1>Blog Post 2</h1>

                        <img src = "https://cdn-images-1.medium.com/max/1200/1*B5TOaI0keBZQJlAEsCFrIw.jpeg"/>

                    </div>

                </div>

                <div className="bottom-footer">
                    <h1>JALEN JACKSON</h1>
                    <p>jalenjack201@hotmail.com</p>
                    <p>678-205-9497</p>
                </div>

            </ReactCSSTransitionGroup>
            </div>
        )
    }
}