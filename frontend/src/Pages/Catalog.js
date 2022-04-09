import React, {useEffect} from 'react';
import * as API from "../API";
import Header from "../PageComponents/Header";
import Footer from "../PageComponents/Footer";
import ProductCard from "../Cards/ProductCard";
import {A} from 'hookrouter';

export default function Catalog({what}) {
    const [cards, setCards] = React.useState([]);

    useEffect(() => {
        API.list(what).then(p => setCards(p));
    }, [what])

    return (
        <div className="Catalog">
            <Header/>
            <main>
                <article>
                    <h3>{what.charAt(0).toUpperCase() + what.slice(1)}</h3>
                    <A href={`/catalog/${what}/create`}>
                        <h3>Add a new product</h3>
                    </A>
                    {cards.map(c => <ProductCard key={c.id} group={what} title={c.title} slug={c.slug}/>)}
                </article>
            </main>
            <Footer/>
        </div>
    );
}