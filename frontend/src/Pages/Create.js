import React, {useEffect} from "react";
import * as API from "../API";
import Header from "../PageComponents/Header";
import Footer from "../PageComponents/Footer";

export default function Create({what, how}) {
    const [product, setProduct] = React.useState([]);

    useEffect(async () => {
        setProduct(await API.create(what, how))
    }, [how, what])

    return (
        <div className="Create">
            <Header/>
            <main>
                <article>
                    <section>
                        <h1>Create a new product</h1>
                        {Object.keys(product).map(f =>
                            <div className="field" key={f}>
                                <p>{f.charAt(0).toUpperCase() + f.slice(1)}</p>
                                <input type="text"/>
                            </div>
                        )}
                        <button onClick={() => {
                            let body = {};
                            let count = 0;
                            let data = document.getElementsByTagName("input")
                            Object.keys(product).map(f => {
                                body[f] = data[count].value;
                                ++count;
                            })
                            API.create(what, body)
                        }}>Submit
                        </button>
                    </section>
                </article>
            </main>
            <Footer/>
        </div>
    );
}