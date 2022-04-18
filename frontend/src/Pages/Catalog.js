import React, {useEffect} from 'react';
import * as API from "../API";
import Header from "../PageComponents/Header";
import Footer from "../PageComponents/Footer";
import ProductCard from "../Cards/ProductCard";
import {A, navigate} from 'hookrouter';
import {Button, Container, Typography} from "@mui/material";

export default function Catalog({what}) {
    const [cards, setCards] = React.useState([]);

    useEffect(() => {
        API.list(what).then(p => setCards(p));
    }, [what])

    return (
        <div className="Catalog">
            <Header/>
            <main>
                <article>
                    <Container maxWidth={"lg"} sx={{marginTop: 12}}>
                        <Typography variant={"h2"} align={"center"}
                                    gutterBottom color={"whitesmoke"}
                                    sx={{fontWeight: 'bold'}}>{what.charAt(0).toUpperCase() + what.slice(1)}</Typography>
                        <Button variant="contained" size={"large"} style={{ borderRadius: '8px',
                                backgroundColor: "#227173"
                            }}
                                onClick={() => navigate(`/catalog/${what}/create`)}>
                            Add a new product
                        </Button>
                        {cards.map(c => <ProductCard key={c.id} group={what} title={c.title} slug={c.slug}/>)}
                    </Container>
                </article>
            </main>
            <Footer/>
        </div>
    );
}