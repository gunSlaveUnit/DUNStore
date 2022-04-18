import React, {useEffect} from "react";
import * as API from "../API";
import Header from "../PageComponents/Header";
import Footer from "../PageComponents/Footer";
import {Button, Container, FormControl, FormHelperText, Grid, Input, InputLabel, Typography} from "@mui/material";
import {navigate} from "hookrouter";
import ProductCard from "../Cards/ProductCard";

export default function Create({what, how}) {
    const [product, setProduct] = React.useState([]);

    useEffect(() => {
        API.create(what, how).then(p => setProduct(p));
    }, [how, what])

    return (
        <div className="Create">
            <Header/>
            <main>
                <article>
                    <Container maxWidth={"lg"} sx={{marginTop: 12}} align={"center"}>
                        <Typography variant={"h2"} align={"center"}
                                    gutterBottom color={"whitesmoke"}
                                    sx={{fontWeight: 'bold'}}>Create a new product</Typography>
                        <FormControl onSubmit={() => {
                            let data = document.getElementsByTagName("input")
                            let body = Object.fromEntries(Object.keys(product).map((f, i) => [f, data[i].value]));
                            API.create(what, body)
                        }}>
                            {Object.keys(product).map(f =>
                                <FormControl sx={{margin: 2}}>
                                    <InputLabel htmlFor="my-input" sx={{fontSize: 20}} style={{color: "#000"}}>{"Enter a " + f}</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text"/>
                                </FormControl>
                            )}
                            <Button variant="contained" size={"large"} style={{
                                borderRadius: '8px',
                                backgroundColor: "#227173"
                            }}
                                    type={"submit"}>
                                Submit
                            </Button>
                        </FormControl>
                    </Container>
                </article>
            </main>
            <Footer/>
        </div>
    );
}