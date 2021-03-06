import React, {useEffect} from 'react';
import * as API from "../apis/API";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import {Container, Typography} from "@mui/material";
import Create from "./Create";
import {useCookies} from "react-cookie";

export default function Catalog({what}) {
    const [cards, setCards] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [cookies, setCookie, removeCookie] = useCookies();

    useEffect(() => {
        if (cards) return;
        API.list(what)
            .then(p => setCards(p))
            .then(_ => setLoading(false));
    }, [what, cards])

    return (
        <Container sx={{marginTop: 11}} fixed>
            {cookies["is_superuser"] === "true" && <Create what={what} how={{}} update={() => { setCards(null) }}/>}

            {loading && <Loader/>}
            {(cards || []).length ? (
                <Container fixed sx={{marginTop: 3}} maxWidth={"lg"} style={{alignItems: "center"}}>
                    {(cards || []).map(c => <ProductCard key={c.id} group={what} card={c}/>)}
                </Container>
            ) : (
                loading ? null :
                    <Typography variant={"h3"}
                                align={"center"}
                                mt={7} style={{color: "#7a9cbc"}}
                                gutterBottom>
                        No products
                    </Typography>
            )}
        </Container>
    );
}