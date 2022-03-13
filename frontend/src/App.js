import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Content processors/>
                <Footer/>
            </div>
        );
    }
}