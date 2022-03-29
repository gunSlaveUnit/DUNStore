import React from 'react';
import ProductCard from "./ProductCard";

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    fetchContent() {
        console.log("http://localhost:8000/api/v1/store/processors/", {method: 'GET'});
        return fetch("http://localhost:8000/api/v1/store/processors/", {method: 'GET'});
    }

    componentDidMount() {
        this.fetchContent().then(response => {
            this.setState({
                cards: response.cards
            });
        });

        console.log(this.state.cards)

        this.setState({
            cards: this.state.cards.map((c) =>
                <ProductCard card = {c}/>
            )
        });
    }

    render() {
        return (
            <main>
                <article>
                    <ul>{this.cards}</ul>
                </article>
            </main>
        );
    }
}