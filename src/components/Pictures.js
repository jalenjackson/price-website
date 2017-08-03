import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import '../assets/stylesheets/videos.css'

export default class Pictures extends React.Component {

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
                        <div style={{background:"linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.9)), url(http://entertainmentvoice.com/wp-content/uploads/2016/11/ErynAllenKane-Avalon_PhoebeSolomon_Feature7.jpg) center center no-repeat", backgroundSize:"cover"}} className="video-header">
                            <h1>Pictures</h1>

                        </div>
                    </ReactCSSTransitionGroup>
                    <div style={{zIndex: 999999999999999999999999}} className="loader-container about-loader">



                    </div>
                    <div id="columns">
                        <div className="pin">
                            <img src="http://blog.symphonicdistribution.com/wp-content/uploads/2014/04/black-and-white-indie-indie-rock-music-artist-music-artists-Favim.com-194896.jpg" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed feugiat consectetur pellentesque. Nam ac elit risus,
                                ac blandit dui. Duis rutrum porta tortor ut convallis.
                                Duis rutrum porta tortor ut convallis.
                            </p>
                        </div>

                        <div className="pin">
                            <img src="https://s-media-cache-ak0.pinimg.com/originals/e8/9a/db/e89adb29ef3eb6fa61b96c5e2a15fe33.jpg" />
                            <p>
                                Donec a fermentum nisi.
                            </p>
                        </div>



                        <div className="pin">
                            <img src="http://www.refinedguy.com/wp-content/uploads/2013/10/5-eminem-most-searched-for-musician-on-google-most-googled-music-artists.jpg" />
                            <p>
                                Nullam eget lectus augue. Donec eu sem sit amet ligula
                                faucibus suscipit. Suspendisse rutrum turpis quis nunc
                                convallis quis aliquam mauris suscipit.
                            </p>
                        </div>

                        <div className="pin">
                            <img src="http://solismagazine.com/wp-content/uploads/2017/01/john-legend-classics-music-artist-favorite-black-white.png" />
                            <p>
                                Donec a fermentum nisi. Integer dolor est, commodo ut
                                sagittis vitae, egestas at augue.
                            </p>
                        </div>

                        <div className="pin">
                            <img src="https://www.walldevil.com/wallpapers/a52/rapper-music-artists-shakur-tupac-wallpapers.jpg" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed feugiat consectetur pellentesque. Nam ac elit risus,
                                ac blandit dui. Duis rutrum porta tortor ut convallis.
                                Duis rutrum porta tortor ut convallis.
                            </p>
                        </div>





                    </div>
                </div>

                <div className="footer">
                    <img src={require("../assets/logo.png")}/>
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



