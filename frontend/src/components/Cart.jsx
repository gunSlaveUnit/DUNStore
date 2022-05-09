import React, {useEffect, useMemo} from 'react';
import * as CartAPI from "../apis/CartAPI";
import * as ProductAPI from "../apis/API";
import {Button, Container, Typography} from "@mui/material";
import Loader from "./Loader";
import {useCookies} from "react-cookie";
import CartProduct from "./CartProduct";
import {navigate} from "hookrouter";

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

    const price = useMemo(
        () => products.reduce((price, p) => price + p.info.price * p.amount, 0),
        [products]);

    return (<Container sx={{marginTop: 11}} fixed>
        {loading && <Loader/>}
        {products.length ? (
            <Container fixed sx={{marginTop: 3}} maxWidth={"lg"} style={{alignItems: "center"}}>
                <Button variant={"contained"} onClick={_ => {
                    navigate('/order')
                }}
                        style={{
                            borderRadius: 10,
                            background: "#7a9cbc",
                            borderStyle: "solid",
                            borderWidth: 3,
                            borderColor: "#435567",
                        }} size={"medium"}>
                    <Typography variant={"medium"} textTransform={"capitalize"} align={"center"}>
                        Make an order
                    </Typography>
                </Button>

                {products.map(c => <CartProduct key={c.id} group={c.category} card={c}/>)}
            </Container>
        ) : (
            loading ? null :
                <Typography variant={"h3"}
                            align={"center"}
                            mt={18} style={{color: "#7a9cbc"}}
                            gutterBottom>
                    No products in your cart
                </Typography>)}
    </Container>);
}