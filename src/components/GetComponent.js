import React, { Component } from 'react'

import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import TheContent from './TheContent'
import Row from './Shared/Row'

class GetComponent extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        block: {},
    }

    componentDidMount() {
        // console.log(this.props)
    }

    getBlockComponent (block) {
        switch (block.acf_fc_layout) {
            case 'header':
            return <Header {...block} />

            case 'footer':
                return <Row {...block} />

            case 'navbar':
                return <Nav {...block} />
            
            case 'article':
                return <TheContent {...block} />
                
            case 'the_content':
                return <TheContent {...block} />
            
            case 'row':
                return <Row {...block} />

            default:
                return null
        }
    }

    render() {
        const {block, i} = this.props
        return (
            this.getBlockComponent(block)
        );
    }
}

export default GetComponent;