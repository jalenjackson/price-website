import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Home extends React.Component {

    render(){

        return (

            <div>
                <div className="real-home-container">




                                <div style={{height: "100%"}} className="header-container change1">
                                    <div className="left-text-container">

                                        <h1 className="parallax responsive-h1">Music Can <br/> <span className="design-word">Change</span> <br/> Your Mind</h1>

                                    </div>
                                </div>

                                <div className="music-section">
                                    <h1>Recent <span style={{fontWeight:"900 !important", fontFamily: "Helvetica, sans-serif"}}>Album</span></h1>

                                    <div className="three-column-container">
                                        <div style={{background: "url(http://3m84r11gpx1j11puas2g5wfl.wpengine.netdna-cdn.com/wp-content/uploads/2015/12/Tame-Impala-Currents.jpg) center center no-repeat"}} className="three-column-layout">
                                            <div className="overlay">
                                                <div className="overlay-text-container">
                                                    <h1>Lorem Ipsum</h1>
                                                    <h1>Lorem Ipsum</h1>
                                                </div>

                                            </div>
                                        </div>
                                        <div style={{background: "url(https://s-media-cache-ak0.pinimg.com/736x/cb/10/43/cb1043a8ac84116d5cd798acb333d5b4--pink-floyd-album-covers-classNameic-album-covers.jpg) center center no-repeat"}} className="three-column-layout">
                                            <div className="overlay">
                                                <div className="overlay-text-container">
                                                    <h1>Lorem Ipsum</h1>
                                                    <h1>Lorem Ipsum</h1>
                                                </div>

                                            </div>
                                        </div>
                                        <div style={{background: "url(http://illusion.scene360.com/wp-content/uploads/2014/10/computergraphics-album-covers-2014-15.jpg) center center no-repeat"}} className="three-column-layout">
                                            <div className="overlay">
                                                <div className="overlay-text-container">
                                                    <h1>Lorem Ipsum</h1>
                                                    <h1>Lorem Ipsum</h1>
                                                </div>

                                            </div>

                                        </div>
                                        <button className="check-all">Check All</button>
                                    </div>
                                </div>

                                <div className="our-video">
                                    <h1 className="vvv">Our Music <br/> <span className="video-text">Video</span></h1>
                                    <img className="video-img" src="https://maxcdn.icons8.com/Share/icon/Media_Controls//play1600.png"/>

                                    <div className="video-overlay">

                                    </div>

                                </div>
                                <button  className="check-all">All Videos</button>

                                <div className="photo-gallery">
                                    <p>Photo <span style={{fontWeight:"900 !important", fontFamily: "Helvetica, sans-serif"}}>Gallery</span></p>



                                    <div id="columns">
                                        <figure>
                                            <img src="https://assets.sk-static.com/assets/nw/components/homepage/hero-2-370100b.jpg"/>
                                                <div className="img-overlay">
                                                    <h1 className="plus">+</h1>
                                                </div>
                                        </figure>

                                        <figure>
                                            <img src="https://media.timeout.com/images/103589433/image.jpg"/>
                                                <div className="img-overlay">
                                                    <h1 className="plus">+</h1>
                                                </div>
                                        </figure>

                                        <figure>
                                            <img src="http://media.npr.org/assets/img/2016/06/11/gettyimages-514742700_custom-d7f8bb2d43b5d7cad937e93e79388471ed1cbffd-s900-c85.jpg"/>
                                                <div className="img-overlay">
                                                    <h1 className="plus">+</h1>
                                                </div>
                                        </figure>

                                        <figure>
                                            <img src="http://www.mercurynews.com/wp-content/uploads/2017/06/sjm-future-0615-17.jpg?w=620"/>
                                                <div className="img-overlay">
                                                    <h1 className="plus">+</h1>
                                                </div>
                                        </figure>

                                        <figure>
                                            <img src="http://www.riverbend.org/wp-content/uploads/2017/01/GreenDay-1000x450-Artist.jpg"/>
                                                <div className="img-overlay">
                                                    <h1 className="plus">+</h1>
                                                </div>
                                        </figure>

                                        <figure>
                                            <img src="https://cdn.vox-cdn.com/thumbor/1AeiVcMk_49h_3WGb97nnn6KPFI=/0x0:3491x2327/1200x800/filters:focal(0x0:3491x2327)/cdn.vox-cdn.com/uploads/chorus_image/image/47640187/GettyImages-492335662.0.jpg"/>
                                                <div className="img-overlay">
                                                    <h1 className="plus">+</h1>
                                                </div>
                                        </figure>

                                        <figure>
                                            <img src="http://media2.wcpo.com/photo/2017/06/01/0531Future11_1496313806044_60503571_ver1.0_640_480.jpg"/>
                                                <div className="img-overlay">
                                                    <h1 className="plus">+</h1>
                                                </div>
                                        </figure>

                                        <figure>
                                            <img src="https://s-media-cache-ak0.pinimg.com/736x/26/45/b3/2645b31109a447a520ddbe47cb1306ae--christian-rap-christian-singers.jpg"/>
                                                <div className="img-overlay">
                                                    <h1 className="plus">+</h1>
                                                </div>
                                        </figure>
                                    </div>
                                </div>
                                    <button className="check-all">All Pictures</button>



                                    <div className="music-section">
                                        <h1>Recent  <span style={{fontWeight:"900 !important", fontFamily: "Helvetica, sans-serif"}}>Events</span></h1>

                                        <div className="three-column-container">
                                            <div style={{background: "url(http://howibecametexan.com/wp-content/uploads/2013/05/img_2557.jpg) center center no-repeat"}} className="three-column-layout">
                                                <div className="overlay">
                                                    <div className="overlay-text-container">
                                                        <h1>Lorem Ipsum</h1>
                                                        <h1>Lorem Ipsum</h1>
                                                    </div>

                                                </div>
                                            </div>
                                            <div style={{background: "url(https://media.timeout.com/images/102182623/image.jpg) center center no-repeat"}} className="three-column-layout">
                                                <div className="overlay">
                                                    <div className="overlay-text-container">
                                                        <h1>Lorem Ipsum</h1>
                                                        <h1>Lorem Ipsum</h1>
                                                    </div>

                                                </div>
                                            </div>
                                            <div style={{background: "url(https://www.viceroyhotelsandresorts.com/~/media/viceroy_hotels_and_resorts/abudhabi/Images/Images-Extras/yas-concerts2-1280x720.ashx) center center no-repeat"}} className="three-column-layout">
                                                <div className="overlay">
                                                    <div className="overlay-text-container">
                                                        <h1>Lorem Ipsum</h1>
                                                        <h1>Lorem Ipsum</h1>
                                                    </div>

                                                </div>

                                            </div>
                                            <button className="check-all">All Events</button>
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
            </div>
               
        )
    }
}



