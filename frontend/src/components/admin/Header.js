import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

import {Container, Navbar, Nav} from "react-bootstrap";
import styles from "./admin.module.css";

import Movies from "./movies/Movies";
import Home from "../Home";

function Header(props) {
    /**
     * path => build <Route> paths, i.e, relative to the parent route
     * url =>  build relative links.
     */
    let {path, url} = useRouteMatch();
    console.log("path: ", path);
    console.log("url: ", url);
    console.log("props: ", props);

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/admin"> Admin
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Nav.Link as={Link} to={`${url}/movies`}>Movies</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </React.Fragment>
    );
};

export default Header;