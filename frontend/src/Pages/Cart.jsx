import React from 'react';
import Header from "../PageComponents/Header";
import Footer from "../PageComponents/Footer";
import {Container, Typography} from "@mui/material";

export default function Cart() {
    return (
        <div className="Cart">
            <Header/>
            <main>
                <article>
                    <Container maxWidth={"lg"} sx={{marginTop: 12}}>
                        <Typography variant={"h2"} align={"center"}
                                    gutterBottom color={"whitesmoke"}
                                    sx={{fontWeight: 'bold'}}>Cart</Typography>
                    </Container>
                </article>
            </main>
            <Footer/>
        </div>
    );
}