import React, {useEffect} from "react";
import * as API from "../API";
import Header from "../PageComponents/Header";
import Footer from "../PageComponents/Footer";

export default function Update({what, slug}) {
    const [product, setProduct] = React.useState([]);

    useEffect(async () => {
        setProduct(await API.detail(what, slug))
        console.log(product)
    }, [slug, what])

    return (
        <div className="Create">
            <Header/>
            <main>
                <article>
                    <section>
                        <h1>Update product</h1>
                        {Object.entries(product).map(([k, v]) =>
                            <div className="field" key={k}>
                                <p>{k.charAt(0).toUpperCase() + k.slice(1)}</p>
                                <input type="text" value={v}/>
                            </div>
                        )}
                        <button onClick={() => {
                            let data = document.getElementsByTagName("input")
                            let body = Object.fromEntries(Object.keys(product).map((f, i) => [f, data[i].value]));
                            API.update(what, body)
                        }}>Submit
                        </button>
                    </section>
                </article>
            </main>
            <Footer/>
        </div>
    );
}