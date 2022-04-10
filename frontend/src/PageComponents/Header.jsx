import React from 'react';
import {A} from 'hookrouter';
import * as USER_API from '../User';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><A href="/">Home</A></li>
                    <li><button onClick={() => USER_API.signin}>Sign In</button></li>
                    <li><button onClick={() => USER_API.signup}>Sign Up</button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;