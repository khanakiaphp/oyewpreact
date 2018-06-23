import React, { Component } from 'react'
class Nav extends Component {
    constructor(props) {
        super(props)
     
    }

    static defaultProps = {
        html: null
    }

    render() {
        // console.log(this.props)
        return (
            <div className="navbarContainer">
                <div className="siteBranding">MODULAA</div>
                <div className="nav" dangerouslySetInnerHTML={{__html: this.props.html}}></div>
            </div>
        );
    }
}

export default Nav;