import React, {useState, Fragment} from "react";
import {Nav, Container, Navbar } from "react-bootstrap";
import Logo from "../../../../../assets/images/logo.png";

function NavBar() {
    return (
        <Fragment>
            <Navbar bg="dark" variant="dark">
                {/*<Container>*/}
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt="msflix logo" style={{"width": "94px", "marginLeft": "25px", "marginTop": "8px"}} />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Movies</Nav.Link>
                        <Nav.Link href="#pricing">Tv Shows</Nav.Link>
                    </Nav>
                {/*</Container>*/}
            </Navbar>
        </Fragment>
    );
}

export default NavBar;