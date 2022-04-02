import React, {useEffect} from 'react';
import * as API from "./API";
import CategoryCard from "./CategoryCard";

export default function Content({what}) {
    const [cards, setCards] = React.useState([]);

    useEffect( async () => {
        setCards(await API.list(what))
    }, [])

    return (
        <main>
            <article>
                <h3>Categories</h3>
                {cards.map(c => <CategoryCard key={c.id} title={c.title} slug={c.slug}/>)}
            </article>
        </main>
    );
}