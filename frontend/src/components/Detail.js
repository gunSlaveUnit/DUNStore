import React, {useEffect} from "react";
import * as API from "../apis/API";
import {navigate} from 'hookrouter';
import Create from "./Create";
import Loader from "./Loader";
import {Container} from "@mui/material";
import ProductCard from "./ProductCard";

export default function Detail({what, slug}) {
    const [product, setProduct] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const avoidedServiceFields = ["id", "title", "created_at", "updated_at", "slug", "is_published"];

    useEffect(() => {
        API.detail(what, slug)
            .then(p => setProduct(p))
            .then(_ => setLoading(false));
    }, [slug, what])

    function handleUpdate() {
        navigate(`/catalog/${what}/update/${slug}`)
    }

    function handleDelete() {
        API.del(what, slug).then(_ => navigate(`/catalog/${what}/list`, true))
    }

    return (
        <Container sx={{marginTop: 11}} fixed>
            {loading && <Loader/>}
            {product.length ? (
                <Container maxWidth={"lg"} style={{alignItems: "center"}}>
                    {Object.keys(product).map(f => {
                        if (!avoidedServiceFields.includes(f))
                            return (
                                <label key={f}>
                                    {f.charAt(0).toUpperCase() + f.slice(1).replace(/-/g, " ") + ": " + product[f]}
                                </label>
                            )
                    })}
                </Container>
            ) : (
                loading ? null : <p>No products</p>
            )}
        </Container>

    );
}