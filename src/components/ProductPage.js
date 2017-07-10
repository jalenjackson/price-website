import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'


export default class ProductPage extends React.Component {
    render(){
        return (
            <div>


                <div className="product-page">
                    <div className="background-blur"></div>

                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="product"
                        transitionEnterTimeout={600}
                        transitionAppearTimeout={600}
                        transitionLeaveTimeout={400}
                        transitionAppear={true}
                    >
                    <h1 className="title">They say your taste in music shows who you are</h1>
                    <p>My Favorite Album</p>
                    </ReactCSSTransitionGroup>

                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="product"
                        transitionEnterTimeout={600}
                        transitionAppearTimeout={600}
                        transitionLeaveTimeout={400}
                        transitionAppear={true}
                    >
                        <iframe className="product-video" width="360" height="215" src="https://www.youtube.com/embed/7wtfhZwyrcc" frameborder="0" allowfullscreen></iframe>
                    </ReactCSSTransitionGroup>
            </div>



            </div>
        )
    }
}



