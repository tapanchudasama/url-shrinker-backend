import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import {
	Navbar,
	Nav,
	Button,
	Form,
	FormControl
} from "react-bootstrap";

class Header extends React.Component {
	render() {
		return (
			<Navbar bg="dark" variant="dark" expand="lg">
				<Navbar.Brand href="#home">Shrinker!</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
