import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props)
     
    }

    componentDidMount() {
        console.log('dsfs')
    }
    
    componentDidUpdate() {
        console.log('dsfs')
    }

    handleClick() {
        alert('clickced')
    }

    render() {
 
        return (
            <div>
                <h5>Header</h5>
                <div>{this.props.name}</div>
                <button onClick={this.handleClick}>Click Me</button>

            </div>
        );
    }
}

export default Header;