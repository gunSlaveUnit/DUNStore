import React, {useEffect} from 'react';
import * as CartAPI from "../apis/CartAPI";
import * as ProductAPI from "../apis/API";
import {Container, Typography} from "@mui/material";
import Loader from "./Loader";
import {useCookies} from "react-cookie";
import ProductCard from "./ProductCard";
import CartProduct from "./CartProduct";

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

    const [price, setPrice] = React.useState(0);
    useEffect(
        () => {
            setPrice(products.reduce((price, p) => price + p.info.price, 0));
        },
        [products]);

    return (<Container sx={{marginTop: 11}} fixed>
        {loading && <Loader/>}
        {products.length ? (
            <React.Fragment>
                 <Typography variant={"h4"}
                            align={"center"}
                            mt={7} style={{color: "#7a9cbc"}}
                            gutterBottom>
                    {`Order price: ${price}`}&#8381;
                </Typography>
                <Container fixed sx={{marginTop: 3}} maxWidth={"lg"} style={{alignItems: "center"}}>
                    {products.map(c => <CartProduct key={c.id} group={c.category} card={c.info}/>)}
                </Container>
            </React.Fragment>
        ) : (
            loading ? null :
                <Typography variant={"h3"}
                            align={"center"}
                            mt={7} style={{color: "#7a9cbc"}}
                            gutterBottom>
                    No products in your cart
                </Typography>)}
    </Container>);
}