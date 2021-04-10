import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

// Yes, I know, I'm a fucking retard for using jquery with ReactJS, but I was desperate at the time and it works so
import $ from "jquery";

import logo from "../img/101sec.png";

function Navigation() {
    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        // Hides navbar when scrolling down and shows when scrolling up.
        var scroll_top;
        var last_scroll_top = 0;
        var scroll_offset = $(".main-scroll").outerHeight();
        $(window).on("scroll", function() {
            scroll_top = $(this).scrollTop();
            if(scroll_top > last_scroll_top && scroll_top > scroll_offset) {
                $(".main-scroll").removeClass("main-scrolled-up").addClass("main-scrolled-down");
            }
            else {
                $(".main-scroll").removeClass("main-scrolled-down").addClass("main-scrolled-up");
            }
            last_scroll_top = scroll_top;
        });
    });
    return (
        <div className="d-flex justify-content-center main-scroll">
            <Navbar expanded={expanded} id="main-navbar" expand="md" variant="light" className="main-fade-in-3d-animation">
                <Navbar.Brand as={NavLink} onClick={() => setExpanded(false)} exact className="d-md-none" to="/">
                    <img className="main-navbar-logo" src={logo} alt="101sec" />
                </Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}>
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                </Navbar.Toggle>
                <Navbar.Collapse className="main-navbar-mobile-fix">
                    <Nav>
                        <Nav.Item className="px-2">
                            <Nav.Link as={NavLink} onClick={() => setExpanded(false)} to="/cyber">Cyber</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="px-2">
                            <Nav.Link as={NavLink} onClick={() => setExpanded(false)} to="/resources">Resources</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Navbar.Brand className="d-none d-md-inline-block m-0 px-2">
                        <Nav.Link className="p-0" as={NavLink} onClick={() => setExpanded(false)} exact to="/">
                            <img className="main-navbar-logo" src={logo} alt="101sec" />
                        </Nav.Link>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Item className="px-2">
                            <Nav.Link className="disabled" as={NavLink} onClick={() => setExpanded(false)} to="/minecraft">Minecraft</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="px-2">
                            <Nav.Link className="disabled" as={NavLink} onClick={() => setExpanded(false)} to="/Lockbox">Lockbox</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;