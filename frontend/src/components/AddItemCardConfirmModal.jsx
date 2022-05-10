import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography
} from "@mui/material";
import {navigate} from "hookrouter";
import {useCookies} from "react-cookie";
import {add} from "../apis/CartAPI";

const AddItemCardConfirmModal = ({categorySlug, productSlug}) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <React.Fragment>
            <Button onClick={() => {
                setIsOpen(true);
                add(cookies["access"], categorySlug, productSlug, 1)
                    .then(() => {
                    })
            }} variant={"contained"} startIcon={<AddShoppingCartIcon/>}
                    style={{
                        borderRadius: 10,
                        background: "#7a9cbc",
                        borderStyle: "solid",
                        borderWidth: 3,
                        borderColor: "#435567",
                    }} size={"medium"}>
                <Typography variant={"medium"} textTransform={"capitalize"}>
                    Add to cart
                </Typography>
            </Button>

            {isOpen &&
                <Dialog open={isOpen} onClose={setIsOpen} aria-labelledby={"form-dialog-title"}
                        PaperProps={{
                            style: {
                                backgroundColor: '#1e1e21',
                                boxShadow: 'none',
                                borderRadius: "1.8em"
                            },
                        }}>
                    <DialogTitle id={"form-dialog-title"}>
                        <Typography variant={"h4"} style={{color: "#eceded"}}>
                            New cart item
                        </Typography>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Typography variant={"h6"} style={{color: "#eceded"}}>
                                Your product has been successfully added to cart
                            </Typography>
                        </DialogContentText>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setIsOpen(false)} variant={"contained"}
                                style={{
                                    marginRight: 15,
                                    borderRadius: 10,
                                    background: "#ae718f",
                                    borderStyle: "solid",
                                    borderWidth: 3,
                                    borderColor: "#664350"
                                }} size="medium">
                            <Typography variant={"h6"} style={{color: "#eceded"}} textTransform={"capitalize"}>
                                Continue shopping
                            </Typography>
                        </Button>
                        <Button onClick={() => navigate('/cart')} variant={"contained"}
                                style={{
                                    borderRadius: 10,
                                    background: "#7a9cbc",
                                    borderStyle: "solid",
                                    borderWidth: 3,
                                    borderColor: "#435567"
                                }} size={"medium"}>
                            <Typography variant={"h6"} textTransform={"capitalize"}>
                                Go to cart
                            </Typography>
                        </Button>
                    </DialogActions>
                </Dialog>
            }
        </React.Fragment>
    )
}

export default AddItemCardConfirmModal;