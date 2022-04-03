import React, {useEffect} from 'react';
import * as API from "../API";
import Header from "../PageComponents/Header";
import Footer from "../PageComponents/Footer";
import ProductCard from "../Cards/ProductCard";

export default function Catalog({what}) {
    const [cards, setCards] = React.useState([]);

    useEffect( async () => {
        setCards(await API.list(what))
    }, [what])

    return (
        <div className="Catalog">
            <Header/>
            <main>
                <article>
                    <h3>{what}</h3>
                    <a href={`/catalog/${what}/create`}>
                        Add a new product
                    </a>
                    {cards.map(c => <ProductCard key={c.id} group={what} title={c.title} slug={c.slug}/>)}
                </article>
            </main>
            <Footer/>
        </div>
    );
}