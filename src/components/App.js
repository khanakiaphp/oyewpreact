import React, { Component } from 'react'

import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import Article from './Article'
import TheContent from './TheContent'

class App extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props)
    }

    getBlockComponent (block) {
        switch (block.type) {
            case 'header':
                return <Header key={block.id} {...block.data} />

            case 'footer':
                return <Footer key={block.id} {...block.data} />

            case 'navbar':
                return <Nav key={block.id} {...block.data} />
            
            case 'article':
                return <Article key={block.id} {...block.data} />
                
            case 'the_content':
                return <TheContent key={block.id} {...block.data} />

            default:
                return null
        }
    }

    render() {
        return (
            <div>
                { this.props.components.map(block => this.getBlockComponent(block)) }
            </div>
        );
    }
}

export default App;