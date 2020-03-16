import React from "react";
import { Table } from "react-bootstrap";
import axios from 'axios';
require ('dotenv').config();

const RowUrl = props => (
	<tr>
		<td>
			<a href={props.url.full}>{props.url.full}</a>
		</td>
		<td>
			<a href={props.url.full}>{process.env.REACT_APP_BACKEND_URL}{props.url.short}</a>
		</td>
		<td>
			{props.url.clicks}
		</td>
	</tr>
);
class ShowUrls extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			urls: []
		};
	}
	componentDidMount() {
		console.log(process.env.REACT_APP_BACKEND_URL);
		axios
			.get(process.env.REACT_APP_BACKEND_URL)
			.then(res => {
				this.setState({ urls: res.data });
			})
			.catch(err => console.log(err));
	}
	readUrls() {
		return this.state.urls.map(function(currentUrl, i) {
			return <RowUrl url={currentUrl} key={i} />;
		});
	}
	render() {
		return (
			<Table striped responsive hover>
				<thead>
					<tr>
						<th>Full URL</th>
						<th>Shortened URL</th>
						<th>Clicks</th>
					</tr>
				</thead>
				<tbody>{this.readUrls()}</tbody>
			</Table>
		);
	}
}
export default ShowUrls;