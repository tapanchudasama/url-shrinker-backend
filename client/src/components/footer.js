import React from "react";
import {Link} from 'react-router-dom';
import '../index.css';

class Footer extends React.Component {
	render() {
		return (
			<footer className="page-footer font-small blue">
				<div className="footer-copyright text-center py-3">
					© 2020 Copyright:
					<Link to='/'> Shrinker.com</Link>
				</div>
			</footer>
		);
	}
}
export default Footer;
