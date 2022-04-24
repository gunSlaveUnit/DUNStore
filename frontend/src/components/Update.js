import React, {useEffect} from "react";
import * as API from "../apis/API";

const disabledEditingFields = ["id", "created_at", "updated_at"];

export default function Update({what, slug}) {
    const [product, setProduct] = React.useState([]);

    useEffect(() => {
        API.detail(what, slug).then(p => setProduct(p))
    }, [slug, what])

    function handleSubmit(event) {
        event.preventDefault()

        let data = document.getElementsByTagName("input")
        let body = Object.fromEntries(Object.keys(product).map((f, i) => [f, data[i].value]));
        API.update(what, slug, body).then(_ => {
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            {Object.entries(product).map(([k, v]) =>
                <div key={k}>
                    <label>{k.charAt(0).toUpperCase() + k.slice(1).replace(/_/g, " ")}</label>
                    <input type={"text"} disabled={disabledEditingFields.includes(k)}
                           defaultValue={v}/>
                </div>
            )}
            <button type={"submit"}>
                Submit
            </button>
        </form>
    );
}