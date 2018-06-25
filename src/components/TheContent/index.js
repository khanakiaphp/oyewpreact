import React, { Component } from 'react'
class TheContent extends Component {
    constructor(props) {
        super(props)
     
    }

    static defaultProps = {
        data: null,
    }

    render() {
        // console.log(this.props)
        return (
            <div className="theContent">
                <div className="content" dangerouslySetInnerHTML={{__html: this.props.html}}></div>
            </div>
        );
    }
}

export default TheContent;