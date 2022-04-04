import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Container, Nav} from "react-bootstrap";

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <Navbar bg="light" expand="lg">
                  <Container>
                    <Navbar.Brand href="/">GURU</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto center-block">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link>Contact</Nav.Link>
                        <Nav.Link>Team</Nav.Link>
                        <Nav.Link>Sign In</Nav.Link>
                        <Button>Sign Up</Button>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
            </header>
        );
    }
}