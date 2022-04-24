import React from "react";
import {signin} from "../apis/User";

const SignInModal = ({tokenAPI}) => {
    const [isOpen, setIsOpen] = React.useState(false)

    function handleLogIn() {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        signin(username, password)
            .then(t => tokenAPI.setToken(t))
    }

    return (
        <React.Fragment>
            <button onClick={() => setIsOpen(true)}>
                Sign In
            </button>

            {isOpen &&
                <div>
                    <input id={"username"} type={"text"} placeholder={"Enter a username"}/>
                    <input id={"password"} type={"password"} placeholder={"Enter a password"}/>
                    <button onClick={handleLogIn}>Sign In</button>
                    <button onClick={() => setIsOpen(false)}>Close</button>
                </div>}
        </React.Fragment>
    )
}

export default SignInModal;