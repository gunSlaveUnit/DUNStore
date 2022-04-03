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
                        <form onSubmit={() => {
                            let data = document.getElementsByTagName("input")
                            let body = Object.fromEntries(Object.keys(product).map((f, i) => [f, data[i].value]));
                            API.create(what, body)
                        }}>
                            <h1>Create a new product</h1>
                            {Object.keys(product).map(f =>
                                <div className="field" key={f}>
                                    <p>{f.charAt(0).toUpperCase() + f.slice(1)}</p>
                                    <input type="text"/>
                                </div>
                            )}
                            <button type={"submit"}>Submit</button>
                        </form>
                    </section>
                </article>
            </main>
            <Footer/>
        </div>
    );
}