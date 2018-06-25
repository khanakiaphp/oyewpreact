import React, { Component } from 'react'
import classnames from 'classnames'
import GetComponent from '../GetComponent'

class Row extends Component {
    constructor(props) {
        super(props)
    
    }

    static defaultProps = {
        columns: [],
        css_class: null
    }

    getColumnComponent(obj, i) {
        return (
            <div className={'ocol'} id={obj.id} key={i}>
                <div className={'ocolInner'}>
                    { obj.fields.map((block, i) => <GetComponent key={i} block={block} /> ) }
                </div>
            </div>
        )
    }

    render() {
        console.log(this.props)
        const cssClass = classnames('orow', this.props.css_class)

        return (
            <div className={cssClass}>
                { this.props.columns.map((block, i) => this.getColumnComponent(block, i)) }
            </div>
        );
    }
}

export default Row;