import React, {useEffect} from "react";
import * as API from "../API";
import Header from "../PageComponents/Header";
import Footer from "../PageComponents/Footer";
import {A, navigate} from 'hookrouter';

export default function Detail({what, slug}) {
    const [product, setProduct] = React.useState([]);

    useEffect(() => {
        API.detail(what, slug).then(p => setProduct(p));
    }, [slug, what])

    return (
        <div className="Detail">
            <Header/>
            <main>
                <article>
                    <h3>{product.title}</h3>
                    <h3>{product.slug}</h3>
                </article>
                <button onClick={() => navigate(`/catalog/${what}/update/${slug}`)}>
                    Update
                </button>
                <button onClick={() => API.del(what, slug).then(_ => navigate(`/catalog/${what}/list`, true))}>
                    Delete
                </button>
            </main>
            <Footer/>
        </div>
    );
}