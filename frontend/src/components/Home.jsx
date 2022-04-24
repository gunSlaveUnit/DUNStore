import React, {useEffect} from "react";
import * as API from "../apis/API";
import CategoryCard from "./CategoryCard";
import Loader from "./Loader/Loader";

export default function Home() {
    const [categories, setCategories] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        API.list('categories')
            .then(p => setCategories(p))
            .then(_ => setLoading(false));
    }, []);

    return (
        <div>
            <label>Popular categories</label>
            {loading && <Loader/>}
            {categories.length ? (
                <div>
                    {categories.map(c => <CategoryCard key={c.id} title={c.title} slug={c.slug}/>)}
                </div>
            ) : (
                loading ? null : <p>No categories</p>
            )}
        </div>
    );
}