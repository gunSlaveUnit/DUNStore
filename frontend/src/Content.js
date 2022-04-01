import React, {useEffect} from 'react';
import ProductCard from "./ProductCard";

export default function Content () {
    const [cards, setCards] = React.useState([]);

    useEffect(async () => {
        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        };

        const res = await fetch("http://localhost:8000/api/v1/store/sockets/", requestOptions);
        const data = await res.json()
        console.log(data)
        setCards(data)
    }, [])

    return (
        <main>
            <article>
                <h3>Sockets</h3>
                {cards.map(c => <ProductCard key = {c.id} title = {c.title}/>)}
            </article>
        </main>
    );
}