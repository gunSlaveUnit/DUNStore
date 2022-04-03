import React, {useEffect} from 'react';
import * as API from "./API";
import CategoryCard from "./CategoryCard";
import Header from "./Header";
import Footer from "./Footer";

export default function Catalog({what}) {
    const [cards, setCards] = React.useState([]);

    useEffect( async () => {
        setCards(await API.list(what))
    }, [])

    return (
        <div className="Catalog">
            <Header/>
            <main>
                <article>
                    <h3>{what}</h3>
                    {cards.map(c => <CategoryCard key={c.id} title={c.title} slug={c.slug}/>)}
                </article>
            </main>
            <Footer/>
        </div>
    );
}