import React from 'react'
import '../assets/stylesheets/tools.css';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'



export default class ToolsIUse extends React.Component {
    render(){
        return (
            <div className="tools-i-use">
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="route"
                    transitionEnterTimeout={600}
                    transitionAppearTimeout={600}
                    transitionLeaveTimeout={400}
                    transitionAppear={true}
                >
                    <h1>Tools I Use </h1>
                    <img src="https://d3nmt5vlzunoa1.cloudfront.net/ruby/files/2016/07/RubyMine_splash20162@2x.png"/>
                    <h1>RUBYMINE </h1>
                    <img src="https://brainhub.eu/blog/wp-content/uploads/2016/10/webstorm-ide-tool-brainhub.png"/>
                    <h1>Webstorm </h1>
                    <img src="https://2.bp.blogspot.com/-_NFGEYPbXJo/VMjuNz-cksI/AAAAAAAABSU/Gx1YxpWmUYA/w1200-h630-p-k-no-nu/Intellij-PyCharm.png"/>
                    <h1>Pycharm </h1>
                    <img src="https://i.imgur.com/w31Tuuj.png"/>
                    <h1>Iterm2 </h1>
                    <img src="https://www.cloudberrylab.com/blog/wp-content/uploads/2016/04/amazon-web-services-s3-simple-storage-service-logo.png"/>
                    <h1>Amazon S3</h1>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}