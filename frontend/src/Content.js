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
        return fetch("http://localhost:8000/api/v1/store/sockets/", {method: 'GET'})
    }

    componentDidMount() {
        this.fetchContent().then(response => {
            this.setState({
                cards: response.cards
            });
        });

        console.log(this.cards)

        this.state.cards = this.cards.map((c) =>
            <ProductCard card = {c}/>
        );
    }

    render() {
        return (
            <main>
                <article>
                    <ul>{cards}</ul>
                </article>
            </main>
        );
    }
}