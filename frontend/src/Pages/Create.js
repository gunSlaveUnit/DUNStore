import React, {useEffect} from "react";
import * as API from "../API";
import Header from "../PageComponents/Header";
import Footer from "../PageComponents/Footer";

export default function Create({what, how}) {
    const [product, setProduct] = React.useState([]);

    useEffect(() => {
        API.create(what, how).then(p => setProduct(p));
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
                            <h3>Create a new product</h3>
                            {Object.keys(product).map(f =>
                                <p title={f.charAt(0).toUpperCase() + f.slice(1)}>
                                    <input type="text" placeholder={"Enter a " + f}/>
                                </p>
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