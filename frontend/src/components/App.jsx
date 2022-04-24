import React from 'react';
import {useRoutes} from 'hookrouter';
import NotFoundPage from './NotFoundPage';
import Home from "./Home";
import Catalog from "./Catalog";
import Detail from "./Detail";
import Create from "./Create";
import Update from "./Update";
import Cart from "./Cart";
import Header from "./Header";
import Footer from "./Footer";
import {useCookies} from "react-cookie";

const routes = {
    '/': () => <Home/>,
    '/catalog/:catalog/list': ({catalog}) => <Catalog what={catalog}/>,
    '/catalog/:catalog/create': ({catalog}) => <Create what={catalog} how={{}}/>,
    '/catalog/:catalog/update/:slug': ({catalog, slug}) => <Update what={catalog} slug={slug}/>,
    '/catalog/:catalog/detail/:slug': ({catalog, slug}) => <Detail what={catalog} slug={slug}/>,
    '/cart': () => <Cart/>,
}

const App = () => {
    const match = useRoutes(routes);

    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const tokenAPI = {
        token: () => cookies.token,
        setToken: token => setCookie('token', token),
    };

    return (
        <div className={"MainWrapper"}>
            <Header tokenAPI={tokenAPI}/>
            <main>
                {match || <NotFoundPage/>}
            </main>
            <Footer/>
        </div>
    )
}

export default App;