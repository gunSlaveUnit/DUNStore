import React from 'react';
import {useRoutes} from 'hookrouter';
import NotFoundPage from './NotFoundPage';
import Home from "./Home";
import Catalog from "./Catalog";

export default function App() {
    const routes = {
        '/': () => <Home/>,
        '/catalog/:slug': ({slug}) => <Catalog what={slug}/>
    }

    const match = useRoutes(routes);

    return (
        <div className="App">
            {match || <NotFoundPage/>}
        </div>
    )
}