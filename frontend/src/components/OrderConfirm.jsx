import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Stack, styled,
    TextField,
    Typography
} from "@mui/material";
import {navigate} from "hookrouter";
import CheckIcon from '@mui/icons-material/Check';

const OrderConfirm = ({open, close, orderCode}) => {
    return (
        <React.Fragment>
            <Dialog open={open} onClose={close} aria-labelledby={"form-dialog-title"}
                    PaperProps={{
                        style: {
                            backgroundColor: '#1e1e21',
                            boxShadow: 'none',
                            borderRadius: "1.8em",
                            alignItems: "center"
                        },
                    }}>
                <DialogTitle id={"form-dialog-title"}>
                    <Typography variant={"h4"} style={{color: "#eceded", display: "inline"}}>
                        Confirm
                    </Typography>
                    <CheckIcon style={{color: "eceded", fontWeight: "bold", fontSize: "40", marginLeft: 5}}/>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Stack alignItems={"center"} mt={2}>
                            <Typography variant={"h6"} style={{color: "#eceded", display: "inline"}}>
                                Your order has been successfully processed
                            </Typography>
                            <Typography variant={"h6"} style={{color: "#eceded"}} gutterBottom>
                                Within 3-4 days you will receive an SMS about readiness
                            </Typography>
                        </Stack>
                    </DialogContentText>
                    <Stack alignItems={"center"} mt={2}>
                        <Typography variant={"h6"} style={{color: "#eceded", display: "inline"}}>
                            Order code:
                        </Typography>
                        <Typography variant={"h6"} style={{color: "#FFD700", display: "inline", marginLeft: 5}}
                                    gutterBottom>
                            {orderCode}
                        </Typography>
                        <Typography mt={2} variant={"body2"} style={{color: "#eceded"}}>* Present this code upon
                            receipt of the order</Typography>
                        <Typography variant={"body2"} style={{color: "#eceded"}}>* The code will also be in the SMS
                            notification</Typography>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => navigate('/')} variant={"contained"}
                            style={{
                                width: "30%",
                                borderRadius: 10,
                                background: "#7a9cbc",
                                borderStyle: "solid",
                                borderWidth: 3,
                                borderColor: "#435567",
                            }}>
                        <Typography variant={"h6"} textTransform={"capitalize"}>
                            Ok
                        </Typography>
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default OrderConfirm;