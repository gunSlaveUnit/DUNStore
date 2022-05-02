import React, {useEffect} from 'react';
import * as CartAPI from "../apis/CartAPI";
import * as ProductAPI from "../apis/API";
import {Container, Typography} from "@mui/material";
import Loader from "./Loader";
import {useCookies} from "react-cookie";
import ProductCard from "./ProductCard";

export default function Cart() {
    const [products, setProducts] = React.useState([]);
    const [cookies, setCookie, removeCookie] = useCookies([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        CartAPI.list(cookies["access"])
            .then(products => {
                Promise
                    .all(products
                        .map(p => ProductAPI
                            .detail(p.category, p.slug)
                            .then(r => p.info = r)
                            .then(() => p)))
                    .then(results => setProducts(results))
            })
            .then(_ => setLoading(false));
    }, [cookies])

    return (<Container sx={{marginTop: 11}} fixed>
        {loading && <Loader/>}
        {products.length ? (<Container fixed sx={{marginTop: 3}} maxWidth={"lg"} style={{alignItems: "center"}}>
            {products.map(c => <ProductCard key={c.id} group={c.category} card={c.info}/>)}
        </Container>) : (
            loading ? null :
                <Typography variant={"h3"}
                          align={"center"}
                          mt={7} style={{color: "#7a9cbc"}}
                          gutterBottom>
                    No products in your cart
                </Typography>)}
    </Container>);
}