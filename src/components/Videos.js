import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import '../assets/stylesheets/videos.css'

export default class Videos extends React.Component {

    render(){
        return (
            <div className="Video-container">

                    <div id="wrapper">
                        <ReactCSSTransitionGroup
                            component="div"
                            transitionName="change"
                            transitionEnterTimeout={6000}
                            transitionAppearTimeout={2000}
                            transitionLeaveTimeout={4000}
                            transitionAppear={true}
                        >
                        <h1>Videos</h1>
                        </ReactCSSTransitionGroup>
                        <div id="columns">


                            <div className="pin">
                                <iframe src="https://www.youtube.com/embed/ytBAjunbzgc" frameborder="0" allowfullscreen></iframe>
                                <p>
                                    Nullam eget lectus augue. Donec eu sem sit amet ligula
                                    faucibus suscipit. Suspendisse rutrum turpis quis nunc
                                    convallis quis aliquam mauris suscipit.
                                </p>
                            </div>

                            <div className="pin">
                                <iframe src="https://www.youtube.com/embed/ytBAjunbzgc" frameborder="0" allowfullscreen></iframe>
                                <p>
                                    Donec a fermentum nisi. Integer dolor est, commodo ut
                                    sagittis vitae, egestas at augue.
                                </p>
                            </div>

                            <div className="pin">
                                <iframe src="https://www.youtube.com/embed/ytBAjunbzgc" frameborder="0" allowfullscreen></iframe>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed feugiat consectetur pellentesque. Nam ac elit risus,
                                    ac blandit dui. Duis rutrum porta tortor ut convallis.
                                    Duis rutrum porta tortor ut convallis.
                                </p>
                            </div>

                            <div className="pin">
                                <iframe src="https://www.youtube.com/embed/ytBAjunbzgc" frameborder="0" allowfullscreen></iframe>
                                <p>
                                    Nullam eget lectus augue. Donec eu sem sit amet ligula
                                    faucibus suscipit. Suspendisse rutrum turpis quis nunc
                                    convallis quis aliquam mauris suscipit.
                                    Duis rutrum porta tortor ut convallis.
                                </p>
                            </div>


                            <div className="pin">
                                <iframe src="https://www.youtube.com/embed/ytBAjunbzgc" frameborder="0" allowfullscreen></iframe>
                                <p>
                                    Donec a fermentum nisi. Integer dolor est, commodo ut
                                    sagittis vitae, egestas at augue. Suspendisse id nulla
                                    ac urna vestibulum mattis.
                                </p>
                            </div>

                            <div className="pin">
                                <iframe src="https://www.youtube.com/embed/ytBAjunbzgc" frameborder="0" allowfullscreen></iframe>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed feugiat consectetur pellentesque. Nam ac elit risus,
                                    ac blandit dui. Duis rutrum porta tortor ut convallis.
                                </p>
                            </div>

                            <div className="pin">
                                <iframe src="https://www.youtube.com/embed/ytBAjunbzgc" frameborder="0" allowfullscreen></iframe>
                                <p>
                                    Donec a fermentum nisi. Integer dolor est, commodo ut
                                    sagittis vitae, egestas at augue. Suspendisse id nulla
                                    ac urna vestibulum mattis.
                                </p>
                            </div>

                            <div className="pin">
                                <iframe src="https://www.youtube.com/embed/ytBAjunbzgc" frameborder="0" allowfullscreen></iframe>
                                <p>
                                    Donec a fermentum nisi. Integer dolor est, commodo ut
                                    sagittis vitae, egestas at augue. Suspendisse id nulla
                                    ac urna vestibulum mattis.
                                </p>
                            </div>

                            <div className="pin">
                                <iframe src="https://www.youtube.com/embed/ytBAjunbzgc" frameborder="0" allowfullscreen></iframe>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed feugiat consectetur pellentesque. Nam ac elit risus,
                                    ac blandit dui. Duis rutrum porta tortor ut convallis.
                                </p>
                            </div>
                        </div>
                    </div>
                <div className="footer">
                    <img src="http://enroutedigitallab.com/html/beats/images/home/logo2.png"/>
                    <ul>
                        <li>Home</li>
                        <li>Music</li>
                        <li>Videos</li>
                        <li>Photos</li>
                        <li>Gigs</li>
                        <li>Contact</li>
                    </ul>
                </div>

            </div>

        )
    }
}



