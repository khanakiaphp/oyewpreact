import React, { Component } from 'react'
import classnames from 'classnames'

class Header1 extends Component {
    constructor(props) {
        super(props)     
    }

    static defaultProps = {
        id: null,
        cssClass: null,
        imgUrl: null,
        imgAlt: null,
        title: null,
        subTitle: null,
        description: null
    }

    render() {
        const cssClass = classnames('header header1', this.props.cssClass)
        return (
            <header className={cssClass} id={this.props.id}>
                <div className="inner">
                    <div className="imgB hrow"><img src={this.props.imgUrl} alt={this.imgAlt} /> </div>
                    <h2 className="title hrow">{this.props.title}</h2>
                    <h4 className="subTitle hrow">{this.props.subTitle}</h4>                   
                    <div className="description hrow" dangerouslySetInnerHTML={{__html: this.props.description}}></div>
                </div>
            </header>
        );
    }
}

export default Header1;