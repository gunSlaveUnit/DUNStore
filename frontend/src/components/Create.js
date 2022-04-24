import React, {useEffect} from "react";
import * as API from "../apis/API";

export default function Create({what, how}) {
    const [product, setProduct] = React.useState([]);

    useEffect(() => {
        API.create(what, how).then(p => setProduct(p));
    }, [how, what])

    function handleSubmit(event) {
        event.preventDefault()

        let data = document.getElementsByTagName("input")
        let body = Object.fromEntries(Object.keys(product).map((f, i) => [f, data[i].value]));
        API.create(what, body).then(_ => {})
    }

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(product).map(f =>
                <input key={f} type={"text"} placeholder={"Enter a " + f.replace(/_/g, " ")}/>
            )}
            <button type={"submit"}>
                Submit
            </button>
        </form>
    );
}