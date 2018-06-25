import React, { Component } from 'react'
class Nav extends Component {
    constructor(props) {
        super(props)
    
    }

    static defaultProps = {
        links: null
    }

    getLinkComponent(objLink, i) {
        return (
            <li className={objLink.css_class} id={objLink.id} key={i}>
                <a href={objLink.href} className={objLink.anchor_css_class}>
                    {objLink.icon_type=='image' ?
                        <span className="imgC">
                            <span className="img" style={{backgroundImage: `url('${objLink.image_default}')`}}></span>
                            <span className="imgHovered" style={{backgroundImage: `url('${objLink.image_hovered}')`}}></span>
                        </span>
                        :
                        objLink.icon_class ? <i className={objLink.icon_class} /> : null
                    }

                    {objLink.title ? <span>{objLink.title}</span> : null }
                    
                </a>
            </li>
        )
    }

    render() {
        // console.log(this.props)
        return (
            <ul className="linksList">
                { this.props.links.map((block, i) => this.getLinkComponent(block, i)) }
            </ul>
        );
    }
}

export default Nav;