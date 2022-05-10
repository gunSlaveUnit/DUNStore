import React from 'react';
import {useRoutes} from 'hookrouter';
import NotFoundPage from './NotFoundPage';
import Home from "./Home";
import Catalog from "./Catalog";
import Detail from "./Detail";
import Cart from "./Cart";
import Header from "./Header";
import Footer from "./Footer";
import {Container} from "@mui/material";
import Order from "./Order";

const routes = {
    '/': () => <Home/>,
    '/catalog/:catalog/list': ({catalog}) => <Catalog what={catalog}/>,
    '/catalog/:catalog/detail/:slug': ({catalog, slug}) => <Detail what={catalog} slug={slug}/>,
    '/cart': () => <Cart/>,
    '/order': () => <Order/>,
}

const App = () => {
    const match = useRoutes(routes);

    return (
        <Container className={"MainWrapper"} maxWidth={"lg"}>
            <Header/>
            <main>
                {match || <NotFoundPage/>}
            </main>
            <Footer/>
        </Container>
    )
}

export default App;