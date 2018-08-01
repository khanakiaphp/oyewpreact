import React, { Component } from 'react'
import Header1 from '../Header/Header1'
class Headers extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {

    }

    componentDidMount() {
        // console.log(this.props)
    }

    render() {
        return (
            <div>
                <h2 className="text-center mb-3 alert alert-primary">Headers</h2>
                <Header1 
                    title="Oye Wireframe Kit" 
                    subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    imgUrl="https://d30y9cdsu7xlg0.cloudfront.net/png/50320-200.png" />
            </div>
        );
    }
}

export default Headers;