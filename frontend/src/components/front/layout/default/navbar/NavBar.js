import React, {useState, Fragment, useRef, useEffect} from "react";
import {Nav, Container, Navbar } from "react-bootstrap";
import Logo from "../../../../../assets/images/logo.png";

import styles from "./Navbar.module.css";

function NavBar() {
    const navLinkStyle = {
        fontWeight: "700",
        color: "#fff"
    };

    const [navBackground, setNavBackground] = useState(false);
    const navRef = useRef();
    navRef.current = navBackground;
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50
            if (navRef.current !== show) {
                setNavBackground(show)
            }
        }
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <Fragment>
            <Navbar variant="dark" fixed="top" style={{"backgroundColor": navBackground ? '#333131' : 'transparent', fontFamily: "Arial"}}>
                {/*<Container>*/}
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt="msflix logo" style={{"width": "94px", "marginLeft": "25px", "marginTop": "8px"}} />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" style={navLinkStyle}>Home</Nav.Link>
                        <Nav.Link href="#features" style={navLinkStyle}>Movies</Nav.Link>
                        <Nav.Link href="#pricing" style={navLinkStyle}>Tv Shows</Nav.Link>
                    </Nav>
                {/*</Container>*/}
            </Navbar>
        </Fragment>
    );
}

export default NavBar;