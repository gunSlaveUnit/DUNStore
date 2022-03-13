import React from 'react';

function fetchProducts(productsListName) {
    console.log(`http://localhost:8000/api/v1/store/${productsListName}`)
    return fetch(`http://localhost:8000/api/v1/store/${productsListName}`)
}

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetchProducts(this.props.toString()).then(response => {
            this.setState({
                products: response.products
            })
        })
        console.log(this.products)
    }

    render() {
        return (
            <div>
                Some list of products
            </div>
        );
    }
}