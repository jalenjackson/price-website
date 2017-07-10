import React from 'react'
import FontAwesome from 'react-fontawesome'

export default class VideoPlayer extends React.Component {
    render(){
        return (
            <div>
                <div style={{zIndex:"99999999999999999999999999999999999999999999999999999"}} className="video-player-container">
                    <FontAwesome className="times" style={{fontSize:"40px", color: "black", position:"absolute", right:"0", top:"0"}} name='times' />
                    <iframe className="videoPlayer" width="400" height="215" src="https://player.vimeo.com/video/212198724" frameborder="0" allowfullscreen></iframe>
                </div>
                <div style={{zIndex:"99999999999999999999999999999999999999999999999999999"}} className="music-img bounce"></div>
            </div>
        )
    }
}