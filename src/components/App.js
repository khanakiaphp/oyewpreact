import React, { Component } from 'react'
import GetComponent from './GetComponent'
import classnames from 'classnames'

import LayoutDefault from './LayoutDefault'
import LandingPage from './TheUXM/LandingPage'
import LayoutHome from './TheUXM/LayoutHome'
class App extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        components: [],
        layout: 'LandingPage'
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        let LayoutComp = LayoutDefault
        switch (this.props.layout) {
            case 'LandingPage':
                LayoutComp = LandingPage
                break;
            case 'LayoutHome':
                LayoutComp = LayoutHome
                break;
        }
        return (
            <LayoutComp>
                { this.props.components.map((block, i) => {
                        const cssClass = classnames('section-'+block.acf_fc_layout, block.css_class)
                        return (
                            <section key={i} className={cssClass}>
                                <GetComponent block={block} />
                            </section>
                        )
                    } ) 
                }
            </LayoutComp>
        );
    }
}

export default App;