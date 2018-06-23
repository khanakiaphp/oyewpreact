import React, { Component } from 'react'
class Article extends Component {
    constructor(props) {
        super(props)
     
    }

    static defaultProps = {
        html: null,
        article: null
    }

    render() {
        // console.log(this.props)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="article" dangerouslySetInnerHTML={{__html: this.props.article}}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;