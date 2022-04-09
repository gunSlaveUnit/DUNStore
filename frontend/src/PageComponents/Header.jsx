import React from 'react';
import {A} from 'hookrouter';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><A href="/">Home</A></li>
                    <li>Sign In</li>
                    <li>Sign Up</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;