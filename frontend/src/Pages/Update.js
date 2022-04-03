import React, {useEffect} from "react";
import * as API from "../API";
import Header from "../PageComponents/Header";
import Footer from "../PageComponents/Footer";

export default function Update({what, slug}) {
    const [product, setProduct] = React.useState([]);

    useEffect(async () => {
        setProduct(await API.detail(what, slug))
    }, [slug, what])

    return (
        <div className="Create">
            <Header/>
            <main>
                <article>
                    <section>
                        <form onSubmit={() => {
                            let data = document.getElementsByTagName("input")
                            let body = Object.fromEntries(Object.keys(product).map((f, i) => [f, data[i].value]));
                            API.update(what, slug, body)
                        }}>
                            <h3>Update product</h3>
                            {Object.entries(product).map(([k, v]) =>
                                <div className="field" key={k}>
                                    <p>{k.charAt(0).toUpperCase() + k.slice(1)}</p>
                                    <input type="text" defaultValue={v}/>
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