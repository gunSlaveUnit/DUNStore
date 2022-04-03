import React, {useEffect} from "react";
import Header from "../PageComponents/Header";
import Footer from "../PageComponents/Footer";
import * as API from "../API";
import CategoryCard from "../Cards/CategoryCard";

export default function Home() {
    const [categories, setCategories] = React.useState([]);

    useEffect( async () => {
        setCategories(await API.list('categories'));
    }, []);

    return (
        <div className="Home">
            <Header/>
            <main>
                <article>
                    <h3>Popular categories</h3>
                    {categories.map(c => <CategoryCard key={c.id} title={c.title} slug={c.slug}/>)}
                </article>
            </main>
            <Footer/>
        </div>
    );
}