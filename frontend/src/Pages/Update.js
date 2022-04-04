import React, {useEffect} from "react";
import * as API from "../API";
import Header from "../PageComponents/Header";
import Footer from "../PageComponents/Footer";
import {Form, FormControl, Button, FloatingLabel, Container} from 'react-bootstrap';

export default function Update({what, slug}) {
    const [product, setProduct] = React.useState([]);

    useEffect(() => {
        API.detail(what, slug).then(p => setProduct(p))
    }, [slug, what])

    return (
        <Container>
            <div className="Update">
                <Header/>
                <main>
                    <article>
                        <section>
                            <Form onSubmit={() => {
                                let data = document.getElementsByTagName("input")
                                let body = Object.fromEntries(Object.keys(product).map((f, i) => [f, data[i].value]));
                                API.update(what, slug, body)
                            }}>
                                <h3>Update product</h3>
                                {Object.entries(product).map(([k, v]) =>
                                    <FloatingLabel label={k.charAt(0).toUpperCase() + k.slice(1)}>
                                        <FormControl type="text" defaultValue={v}/>
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