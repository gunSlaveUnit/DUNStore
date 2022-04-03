import React from 'react';
import {useRoutes} from 'hookrouter';
import NotFoundPage from './NotFoundPage';
import Home from "./Home";
import Catalog from "./Catalog";
import Detail from "./Detail";

export default function App() {
    const routes = {
        '/': () => <Home/>,
        '/catalog/:catalog/list': ({catalog}) => <Catalog what={catalog}/>,
        '/catalog/:catalog/detail/:detail': ({catalog, detail}) => <Detail what={catalog} slug={detail}/>,
    }

    const match = useRoutes(routes);

    return (
        <div className="App">
            {match || <NotFoundPage/>}
        </div>
    )
}