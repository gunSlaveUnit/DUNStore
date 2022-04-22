import React, {useEffect} from "react";
import * as API from "../API";
import Header from "../PageComponents/Header";
import Footer from "../PageComponents/Footer";
import {Button, Container, FormControl, Input, InputLabel, Typography} from "@mui/material";

const disabledEditingFields = ["id", "created_at", "updated_at"];

export default function Update({what, slug}) {
    const [product, setProduct] = React.useState([]);

    useEffect(() => {
        API.detail(what, slug).then(p => setProduct(p))
    }, [slug, what])

    return (
        <div className="Update">
            <Header/>
            <main>
                <article>
                    <Container maxWidth={"md"} sx={{marginTop: 12}} align={"center"}>
                        <Typography variant={"h2"} align={"center"}
                                    color={"whitesmoke"}
                                    sx={{fontWeight: 'bold'}}>Update product</Typography>
                        <form onSubmit={() => {
                            let data = document.getElementsByTagName("input")
                            let body = Object.fromEntries(Object.keys(product).map((f, i) => [f, data[i].value]));
                            API.update(what, slug, body)
                        }}>
                            {Object.entries(product).map(([k, v]) =>
                                <FormControl sx={{margin: 8, display: 'flex', flexDirection: 'column'}} disabled={disabledEditingFields.includes(k)}>
                                    <InputLabel htmlFor="my-input" sx={{fontSize: 25}} style={{color: "whitesmoke"}}>
                                        {k.charAt(0).toUpperCase() + k.slice(1).replace( /_/g, " ")}
                                    </InputLabel>
                                    <Input defaultValue={v} sx={{fontSize: 25}} aria-describedby="my-helper-text" style={{color: "#227173"}}/>
                                </FormControl>
                            )}
                            <Button variant="contained" size={"large"} style={{
                                borderRadius: '8px',
                                backgroundColor: "#227173"
                            }}
                                    type={"submit"}>
                                Submit
                            </Button>
                        </form>
                    </Container>
                </article>
            </main>
            <Footer/>
        </div>
    );
}