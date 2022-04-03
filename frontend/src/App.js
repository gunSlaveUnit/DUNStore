import React from 'react';
import {useRoutes} from 'hookrouter';
import NotFoundPage from './Pages/NotFoundPage';
import Home from "./Pages/Home";
import Catalog from "./Pages/Catalog";
import Detail from "./Pages/Detail";
import Create from "./Pages/Create";

export default function App() {
    const routes = {
        '/': () => <Home/>,
        '/catalog/:catalog/list': ({catalog}) => <Catalog what={catalog}/>,
        '/catalog/:catalog/create': ({catalog}) => <Create what={catalog} how={{}}/>,
        '/catalog/:catalog/detail/:detail': ({catalog, detail}) => <Detail what={catalog} slug={detail}/>,
    }

    const match = useRoutes(routes);

    return (
        <div className="App">
            {match || <NotFoundPage/>}
        </div>
    )
}