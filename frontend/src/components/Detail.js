import React, {useEffect} from "react";
import * as API from "../apis/API";
import {navigate} from 'hookrouter';

export default function Detail({what, slug}) {
    const [product, setProduct] = React.useState([]);

    const avoidedServiceFields = ["id", "title", "created_at", "updated_at", "slug", "is_published"];

    useEffect(() => {
        API.detail(what, slug).then(p => setProduct(p));
    }, [slug, what])

    function handleUpdate() {
        navigate(`/catalog/${what}/update/${slug}`)
    }

    function handleDelete() {
        API.del(what, slug).then(_ => navigate(`/catalog/${what}/list`, true))
    }

    return (<div>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>

            {Object.keys(product).map(f => {
                if (!avoidedServiceFields.includes(f))
                    return (
                        <label key={f}>
                            {f.charAt(0).toUpperCase() + f.slice(1).replace(/-/g, " ") + ": " + product[f]}
                        </label>
                    )
            })}
        </div>);
}