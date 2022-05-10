import DeleteIcon from "@mui/icons-material/Delete";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography} from "@mui/material";
import React from "react";
import * as API from "../apis/API";
import {navigate} from "hookrouter";
import {useCookies} from "react-cookie";

export default function Delete({what, product}) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [cookies, setCookie, removeCookie] = useCookies();

    function handleDelete() {
        API.del(what, product.slug, cookies["access"])
            .then(_ => setIsOpen(false))
            .then(_ => navigate(`/catalog/${what}/list`, true))
    }

    return (
        <React.Fragment>
            <Button variant={"contained"} startIcon={<DeleteIcon/>} onClick={() => setIsOpen(true)}
                    style={{
                        borderRadius: 10,
                        background: "#ae718f",
                        borderStyle: "solid",
                        borderWidth: 3,
                        borderColor: "#664350",
                    }} size={"small"}>
                <Typography variant={"small"} textTransform={"capitalize"}>
                    Delete
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
                            Delete item
                        </Typography>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Typography variant={"h6"} style={{color: "#eceded"}}>
                                Are you sure you want to delete this?
                            </Typography>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleDelete} variant={"contained"}
                                style={{
                                    marginRight: 15,
                                    borderRadius: 10,
                                    background: "#ae718f",
                                    borderStyle: "solid",
                                    borderWidth: 3,
                                    borderColor: "#664350"
                                }} size="medium">
                            <Typography variant={"h6"} style={{color: "#eceded"}} textTransform={"capitalize"}>
                                Yes, delete this
                            </Typography>
                        </Button>
                        <Button onClick={() => setIsOpen(false)} variant={"contained"}
                                style={{
                                    borderRadius: 10,
                                    background: "#7a9cbc",
                                    borderStyle: "solid",
                                    borderWidth: 3,
                                    borderColor: "#435567"
                                }} size={"medium"}>
                            <Typography variant={"h6"} textTransform={"capitalize"}>
                                Close
                            </Typography>
                        </Button>
                    </DialogActions>
                </Dialog>
            }
        </React.Fragment>
    )
}