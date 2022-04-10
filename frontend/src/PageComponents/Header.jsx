import React from 'react';
import {A} from 'hookrouter';
import SignInModal from "../SignInModal";
import {signout} from "../User";

const Header = () => {
    const [token, setToken] = React.useState(null);
    const tokenAPI = {token, setToken};

    return (
        <header>
            <nav>
                <ul>
                    <li><A href="/">Home</A></li>

                    {token === null &&
                        <div>
                            <li>
                                <button onClick={() => {
                                }}>Sign In
                                </button>
                            </li>
                            <li>
                                <button onClick={() => {
                                }}>Sign Up
                                </button>
                            </li>
                        </div>
                    }

                    {token !== null &&
                        //TODO: we can make profile page here
                        <div>
                            <li>
                                <button onClick={() => {
                                    signout(token).then(_ => tokenAPI.setToken(null))
                                }}>Sign Out
                                </button>
                            </li>
                        </div>
                    }

                </ul>
            </nav>

            <SignInModal tokenAPI={tokenAPI}/>
        </header>
    );
}

export default Header;