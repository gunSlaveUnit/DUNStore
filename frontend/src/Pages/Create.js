import React, {useEffect} from "react";
import * as API from "../API";
import Header from "../PageComponents/Header";
import Footer from "../PageComponents/Footer";
import {Form, FormControl, Button, FloatingLabel, Container} from 'react-bootstrap';

export default function Create({what, how}) {
    const [product, setProduct] = React.useState([]);

    useEffect(() => {
        API.create(what, how).then(p => setProduct(p));
    }, [how, what])

    return (
        <Container>
            <div className="Create">
                <Header/>
                <main>
                    <article>
                        <section>
                            <Form onSubmit={() => {
                                let data = document.getElementsByTagName("input")
                                let body = Object.fromEntries(Object.keys(product).map((f, i) => [f, data[i].value]));
                                API.create(what, body)
                            }}>
                                <h3>Create a new product</h3>
                                {Object.keys(product).map(f =>
                                    <FloatingLabel label={f.charAt(0).toUpperCase() + f.slice(1)}>
                                        <FormControl type="text" placeholder={"Enter a " + f}/>
                                    </FloatingLabel>
                                )}
                                <Button type={"submit"}>Submit</Button>
                            </Form>
                        </section>
                    </article>
                </main>
                <Footer/>
            </div>
        </Container>

    );
}