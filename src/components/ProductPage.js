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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                <h1>Slide Show</h1>


            </div>
        )
    }
}



