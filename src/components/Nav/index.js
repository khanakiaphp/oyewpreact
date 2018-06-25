import React, { Component } from 'react'
import Links from '../Shared/Links'
import classnames from 'classnames'
class Nav extends Component {
    constructor(props) {
        super(props)
    
    }

    static defaultProps = {
        css_class: null,
        fields: []
    }

    getBlockComponent (block, i) {
        switch (block.acf_fc_layout) {
            case 'menu':
                return <div key={i} className="block blockMenu"><div className="blockInner" dangerouslySetInnerHTML={{__html: block.html}}></div></div>

            case 'links':
                return  <div key={i} className="block blockLinks"><div className="blockInner"><Links links={block.links} /></div></div>

            case 'logo':
                return <div key={i} className="block blockLogo"><div className="blockInner logo" style={{backgroundImage: `url('${block.logo}')`}}></div></div>

            default:
                return null
        }
    }

    render() {
        console.log(this.props)
        const {css_class, fields, layout} = this.props
        const containerClass = classnames('navbarCt', css_class, 'child_'+fields.length, layout)
        return (
            <div className={containerClass}>
                { fields.map((block, i) => this.getBlockComponent(block, i)) }
            </div>
        );
    }
}

export default Nav;