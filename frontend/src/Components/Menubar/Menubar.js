import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Menubar = () => {
    const Logout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("id");
        localStorage.removeItem("phoneNumber");
        localStorage.removeItem("name");
        localStorage.removeItem("metamaskId");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/";
    }

    const moveToMakeGroupsPage = () => {
        window.location.href = "/make-groups";
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Secure Cloud Transactions using Blockchain</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link onClick = {moveToMakeGroupsPage}>Make Groups</Nav.Link>
                    <Nav.Link onClick = {Logout}>Logout</Nav.Link>
                    {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>*/}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menubar;