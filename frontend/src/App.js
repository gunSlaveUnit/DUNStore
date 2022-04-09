import React from 'react';
import {useRoutes} from 'hookrouter';
import NotFoundPage from './Pages/NotFoundPage';
import Home from "./Pages/Home";
import Catalog from "./Pages/Catalog";
import Detail from "./Pages/Detail";
import Create from "./Pages/Create";
import Update from "./Pages/Update";

const routes = {
    '/': () => <Home/>,
    '/catalog/:catalog/list': ({catalog}) => <Catalog what={catalog}/>,
    '/catalog/:catalog/create': ({catalog}) => <Create what={catalog} how={{}}/>,
    '/catalog/:catalog/update/:slug': ({catalog, slug}) => <Update what={catalog} slug={slug}/>,
    '/catalog/:catalog/detail/:slug': ({catalog, slug}) => <Detail what={catalog} slug={slug}/>,
}

const App = () => {
    const match = useRoutes(routes);

    return (
        <div className="App">
            {match || <NotFoundPage/>}
        </div>
    )
}

export default App;