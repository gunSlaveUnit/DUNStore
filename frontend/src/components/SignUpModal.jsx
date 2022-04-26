import React from "react";
import {signup} from "../apis/User";
import {Button, Typography} from "@mui/material";

const SignUpModal = ({tokenAPI}) => {
    const [isOpen, setIsOpen] = React.useState(false)

    function handleLogIn() {
        let email = document.getElementById('email').value;
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        signup(email, username, password)
            .then(t => tokenAPI.setToken(t))
    }

    return (
        <React.Fragment>
            <Button onClick={() => setIsOpen(true)} variant={"contained"}
            style={{borderRadius: 10, background: "#7a9cbc", borderStyle: "solid", borderWidth: 3, borderColor: "#435567"}} size={"medium"}>
                <Typography variant={"h6"} textTransform={"capitalize"}>
                    Sign Up
                </Typography>
            </Button>

            {isOpen &&
                <div>
                    <input id={"email"} type={"email"} placeholder={"Enter an email"}/>
                    <input id={"username"} type={"text"} placeholder={"Enter a username"}/>
                    <input id={"password"} type={"password"} placeholder={"Enter a password"}/>
                    <input id={"retype-password"} type={"password"} placeholder={"Retype password"}/>
                    <Button onClick={handleLogIn}>Sign Up</Button>
                    <Button onClick={() => setIsOpen(false)}>Close</Button>
                </div>}
        </React.Fragment>
    )
}

export default SignUpModal;