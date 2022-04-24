import React from 'react';
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import {A} from "hookrouter";

const Header = ({tokenAPI}) => {
    return (
        <header>
            <A href={'/'}>GURU</A>
            <nav>
                <SignInModal tokenAPI={tokenAPI}/>
                <SignUpModal tokenAPI={tokenAPI}/>
            </nav>
        </header>
    );
}

export default Header;