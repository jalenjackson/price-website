import React from 'react'
import FontAwesome from 'react-fontawesome'

export default class VideoPlayer extends React.Component {
    render(){
        return (
            <div>
                <div className="video-player-container">
                    <FontAwesome className="times" style={{fontSize:"40px", color: "black", position:"absolute", right:"0", top:"0"}} name='times' />
                    <iframe className="videoPlayer" width="400" height="215" src="https://www.youtube.com/embed/4Tr0otuiQuU" frameborder="0" allowfullscreen></iframe>
                </div>
                <div className="music-img"></div>
            </div>
        )
    }
}