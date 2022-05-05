import React, {useEffect} from 'react';
import {A, navigate} from 'hookrouter';
import {add} from "../apis/CartAPI";
import {useCookies} from "react-cookie";
import {
    Button,
    ButtonBase,
    Link,
    CardActionArea,
    CardContent,
    Grid,
    Paper,
    Stack,
    styled,
    Typography, Card, Icon, ButtonGroup
} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import Delete from "./Delete";
import Update from "./Update";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function CartProduct(props) {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [amount, setAmount] = React.useState(props.card.amount)


    function handleProductCardTitleClicked() {
        navigate(`/catalog/${props.group}/detail/${props.card.slug}`)
    }

    const avoidedServiceFields = ["id", "title", "created_at", "updated_at", "slug", "is_published", "price", "image"];

    return (
        <Card
            style={{
                p: 2,
                flexGrow: 1,
                backgroundColor: "#27282b",
                height: 260,
                width: 750,
                padding: 30,
                marginBottom: 30,
                borderRadius: "1.8em"
            }}>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{width: 256, height: 256}}>
                        <Img alt={`${props.card.info.title} logo`} src={props.card.info.image}/>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Link onClick={() => handleProductCardTitleClicked()}>
                                <Typography gutterBottom variant="h5" sx={{fontWeight: 'bold'}}
                                            style={{color: "#eceded"}}
                                            component="div">
                                    {props.card.info.title}
                                </Typography>
                            </Link>
                            <Typography variant="body2" style={{color: "#6c6964"}} gutterBottom>
                                ID: 1030114
                            </Typography>
                            {Object.keys(props.card.info).map(f => {
                                if (!avoidedServiceFields.includes(f))
                                    return (
                                        <Typography variant="body1" key={f} style={{color: "#eceded"}}>
                                            {f.charAt(0).toUpperCase() + f.slice(1).replace(/_/g, " ") + ": " + props.card.info[f]}
                                        </Typography>
                                    )
                            })}
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" style={{color: "#6c6964"}}>
                                Available in
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Stack>
                            <Typography variant="h5" sx={{fontWeight: 'bold'}} style={{color: "#eceded"}}
                                        component="div" align={"right"}>
                                {props.card.info.price}&#8381;
                            </Typography>

                            <Delete what={props.group} product={props.card}/>

                            <ButtonGroup style={{marginTop: 100}}>
                                <Icon sx={{backgroundColor: "#eceded", fontSize: 50, borderRadius: 15}}>
                                    <Typography variant="h5" sx={{fontWeight: 'bold'}}>
                                        {amount}
                                    </Typography>
                                </Icon>
                                <Icon sx={{color: "#7a9cbc", fontSize: 40}} onClick={() => setAmount(amount + 1)}>add_circle</Icon>
                                <Icon sx={{color: "#7a9cbc", fontSize: 40}} onClick={() => setAmount(amount - 1)}>remove_circle</Icon>
                            </ButtonGroup>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
}