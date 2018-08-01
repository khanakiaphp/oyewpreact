import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Layout extends Component {
    constructor(props) {
        super(props);        
    }

    componentWillMount() {
    }

    componentDidMount() {
        
    }

    componentDidUpdate() {
        
    }

    render() {  
        return (
            <div className="layout">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Oye React Components</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    Components
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/">Headers</Link>
                                    <Link className="dropdown-item" to="/footers">Footers</Link>
                                    
                                </div>
                            </li>
                        </ul>

                    </div>
                </nav>
                <div className="layout">
                    <main className="layout-content">
                        {this.props.children}
                    </main>
                </div>
            </div>
        );
    }
}

export default Layout;
