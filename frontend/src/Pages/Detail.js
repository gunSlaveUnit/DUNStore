import React, {useEffect} from "react";
import * as API from "../API";
import Header from "../PageComponents/Header";
import Footer from "../PageComponents/Footer";
import {navigate} from 'hookrouter';
import {Box, Button, Container, FormControl, Grid, Input, InputLabel, Toolbar, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {Label} from "@mui/icons-material";
import CategoryCard from "../Cards/CategoryCard";

const avoidedServiceFields = ["id", "title", "created_at", "updated_at", "slug", "is_published"];

export default function Detail({what, slug}) {
    const [product, setProduct] = React.useState([]);

    useEffect(() => {
        API.detail(what, slug).then(p => setProduct(p));
    }, [slug, what])

    return (
        <div className="Detail">
            <Header/>
            <main>
                <Container maxWidth={"lg"} sx={{marginTop: 12}} align={"center"}>
                    <Typography variant={"h2"} align={"center"}
                                gutterBottom color={"whitesmoke"}
                                sx={{fontWeight: 'bold'}}>{product.title}</Typography>

                    <Toolbar sx={{justifyContent: "space-between"}} align={"center"}>
                        <Box mr={3}>
                            <Button variant="contained" sx={{marginRight: 1}} size={"large"} style={{
                                borderRadius: '8px',
                                backgroundColor: "#227173"
                            }} onClick={() => navigate(`/catalog/${what}/update/${slug}`)}>
                                Update
                            </Button>
                            <Button variant="outlined" color="error" startIcon={<DeleteIcon/>} size={"large"}
                                    style={{borderRadius: '8px'}}
                                    onClick={() => API.del(what, slug).then(_ => navigate(`/catalog/${what}/list`, true))}>
                                Delete
                            </Button>
                        </Box>
                    </Toolbar>
                    <Grid>
                        {Object.keys(product).map(f => {
                                if (!avoidedServiceFields.includes(f))
                                    return (
                                        <Typography variant={"h3"} align={"center"}
                                                    color={"whitesmoke"}
                                                    sx={{fontWeight: 'bold'}}>
                                            {f.charAt(0).toUpperCase() + f.slice(1).replace(/-/g, " ")
                                                + ": " + product[f]}
                                        </Typography>
                                    )
                            }
                        )}
                    </Grid>
                </Container>
            </main>
            <Footer/>
        </div>
    );
}