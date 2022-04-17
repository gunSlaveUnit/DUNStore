import React, {useEffect} from "react";
import * as API from "../API";
import Header from "../PageComponents/Header";
import Footer from "../PageComponents/Footer";
import {navigate} from 'hookrouter';
import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Detail({what, slug}) {
    const [product, setProduct] = React.useState([]);

    useEffect(() => {
        API.detail(what, slug).then(p => setProduct(p));
    }, [slug, what])

    return (
        <div className="Detail">
            <Header/>
            <main>
                <article>
                    <h3>{product.title}</h3>
                    <h3>{product.slug}</h3>
                </article>
                <Button variant="contained"
                        onClick={() => navigate(`/catalog/${what}/update/${slug}`)}>
                    Update
                </Button>
                <Button variant="outlined" color="error" startIcon={<DeleteIcon />}
                        onClick={() => API.del(what, slug).then(_ => navigate(`/catalog/${what}/list`, true))}>
                    Delete
                </Button>
            </main>
            <Footer/>
        </div>
    );
}