import React, { Component } from 'react'
import GetComponent from './GetComponent'
import classnames from 'classnames'
class App extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        block: {
            acf_fc_layout: null,
            section_css_class: null
        }
    }

    componentDidMount() {
        // console.log(this.props)
    }

    render() {
        return (
            <div>
                { this.props.components.map((block, i) => {
                        const cssClass = classnames('section-'+block.acf_fc_layout, block.section_css_class)
                        return (
                            <section key={i} className={cssClass}>
                                <GetComponent block={block} />
                            </section>
                        )
                    } ) 
                }
            </div>
        );
    }
}

export default App;