import React, {useEffect} from 'react';
import * as API from "../apis/API";
import ProductCard from "./ProductCard";
import {navigate} from 'hookrouter';
import Loader from "./Loader/Loader";

export default function Catalog({what}) {
    const [cards, setCards] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        API.list(what)
            .then(p => setCards(p))
            .then(_ => setLoading(false));
    })

    return (
        <div>
            <button onClick={() => navigate(`/catalog/${what}/create`)}>
                Add a new product
            </button>

            {loading && <Loader/>}
            {cards.length ? (
                <div>
                    {cards.map(c => <ProductCard key={c.id} group={what} title={c.title} slug={c.slug}/>)}
                </div>
            ) : (
                loading ? null : <p>No products</p>
            )}
        </div>
    );
}