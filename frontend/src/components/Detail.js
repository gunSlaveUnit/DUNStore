import React, {useEffect} from "react";
import * as API from "../apis/API";
import {navigate} from 'hookrouter';
import Loader from "./Loader";
import {
    Button,
    ButtonBase,
    Card,
    CardActionArea,
    Container,
    Grid, Stack,
    styled,
    Typography
} from "@mui/material";
import {add} from "../apis/CartAPI";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {useCookies} from "react-cookie";
import AddItemCardConfirmModal from "./AddItemCardConfirmModal";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


export default function Detail({what, slug}) {
    const [product, setProduct] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const tokenAPI = {
        token: () => cookies.token,
        setToken: token => setCookie('token', token),
    };

    const avoidedServiceFields = ["id", "title", "created_at", "updated_at", "slug", "is_published", "image"];

    useEffect(() => {
        API.detail(what, slug)
            .then(p => setProduct(p))
            .then(_ => setLoading(false));
    }, [slug, what])

    return (
        <Container sx={{marginTop: 11}} fixed>
            {loading && <Loader/>}
            {product ? (
                <Container maxWidth={"lg"} style={{alignItems: "center"}}>
                    <Card style={{
                        p: 2,
                        flexGrow: 1,
                        backgroundColor: "#27282b",
                        height: 400,
                        padding: 10,
                        marginBottom: 30,
                        borderRadius: "1.8em"
                    }}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase sx={{width: 300, height: 300}}
                                            style={{marginTop: "16%", marginLeft: 40}}>
                                    <Img alt={`${product.title} logo`} src={product.image}/>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h3" sx={{fontWeight: 'bold'}}
                                                    style={{color: "#eceded"}}
                                                    component="div">
                                            {product.title}
                                        </Typography>
                                        <Typography variant="h5" style={{color: "#6c6964", marginBottom: 50}}>
                                            ID: 1030114
                                        </Typography>
                                        <Typography variant="h3" sx={{fontWeight: 'bold'}}
                                                    style={{color: "#eceded"}}
                                                    component="div" align={"left"}>
                                            {product.price}&#8381;
                                        </Typography>
                                        {cookies["access"] &&
                                            <AddItemCardConfirmModal categorySlug={what}
                                                                     productSlug={slug}/>
                                        }
                                    </Grid>

                                    <Grid item>
                                        <Typography variant="body2" style={{color: "#6c6964"}}>
                                            Available in
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>


                    <Container maxWidth={"sm"}>
                        <Typography variant="h5" sx={{fontWeight: 'bold'}} mt={2}
                                    style={{color: "#7a9cbc"}}>
                            Specifications
                        </Typography>

                        <Grid mt={2}>
                            {Object.keys(product).map(f => {
                                if (!avoidedServiceFields.includes(f))
                                    return (
                                        <Grid item>
                                            <Typography key={f} variant="h6"
                                                        style={{color: "#eceded"}}>
                                                {f.charAt(0).toUpperCase() + f.slice(1).replace(/_/g, " ") + ": " + product[f]}
                                            </Typography>
                                        </Grid>
                                    )
                            })}
                        </Grid>
                    </Container>
                </Container>
            ) : (
                loading ? null :
                    <Typography variant={"h3"}
                                align={"center"}
                                mt={7} style={{color: "#7a9cbc"}}
                                gutterBottom>
                        No information
                    </Typography>
            )}
        </Container>
    );
}