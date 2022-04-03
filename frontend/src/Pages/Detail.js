import React, {useEffect} from "react";
import * as API from "../API";
import Header from "../PageComponents/Header";
import Footer from "../PageComponents/Footer";

export default function Detail({what, slug}) {
    const [product, setProduct] = React.useState([]);

    useEffect( async () => {
        setProduct(await API.detail(what, slug))
    }, [slug, what])

    return (
        <div className="Detail">
            <Header/>
            <main>
                <article>
                    <h3>{product.title}</h3>
                    <h3>{product.slug}</h3>
                </article>
                <a href={`/catalog/${what}/update/${slug}`}>
                    Update
                </a>
                <a href={`/catalog/${what}/list`} onClick={() => API.del(what, slug)}>
                    Delete
                </a>
            </main>
            <Footer/>
        </div>
    );
}