import React from 'react';

function fetchProducts(productsListName) {
    return fetch(`http://localhost:8000/api/v1/store/${productsListName}/`)
}

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        const result = fetchProducts(this.props.productsListName);
        const products = result.json();
        this.setState({
                products
            })
    }

    render() {
        return (
            <div>
                <ul>
                  {this.state.products.map(item => (
                  <div>
                    <h1>{item.title}</h1>
                    <span>{item.price}</span>
                  </div>
                  ))}
                  </ul>
            </div>
        );
    }
}