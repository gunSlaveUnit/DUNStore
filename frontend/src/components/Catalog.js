import React, {useEffect} from 'react';
import * as API from "../apis/API";
import ProductCard from "./ProductCard";
import {navigate} from 'hookrouter';
import Loader from "./Loader";
import {Button, Container, Grid, Typography} from "@mui/material";
import CategoryCard from "./CategoryCard";
import Create from "./Create";

export default function Catalog({what}) {
    const [cards, setCards] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        if (cards) return;
        API.list(what)
            .then(p => setCards(p))
            .then(_ => setLoading(false));
    }, [what, cards])

    return (
        <Container sx={{marginTop: 11}} fixed>
            <Create what={what} how={{}} update={() => { setCards(null) }}/>

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