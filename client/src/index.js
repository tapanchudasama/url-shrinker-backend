import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Url from "./components/form";
import ShowUrls from "./components/showurls";
import { Jumbotron, Container } from "react-bootstrap";
import Header from "./components/header";
import Footer from "./components/footer";
import "./index.css";

class Body extends React.Component {
	render() {
		return (
			<Router>
				<Header />
				<Container>
					<Jumbotron>
						<Url/>
					</Jumbotron>
					<ShowUrls />
				</Container>
				<Footer />
			</Router>
		);
	}
}

ReactDOM.render(<Body />, document.getElementById("root"));
