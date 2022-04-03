import React, {useEffect} from "react";
import * as API from "./API";
import Header from "./Header";
import Footer from "./Footer";

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
            </main>
            <Footer/>
        </div>
    );
}