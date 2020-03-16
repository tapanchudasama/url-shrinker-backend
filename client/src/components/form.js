import React from "react";
import axios from "axios";

class Url extends React.Component {
	constructor(props) {
		super(props);
		this.handleUserURL = this.handleUserURL.bind(this);
		this.state = {
			fullURL: "",
			ShortURL:"",
		};
	}

	handleUserURL = event => {
		this.setState({ fullURL: event.target.value });
	};
	handleSubmit = event => {
		event.preventDefault();
		axios
			.post('https://sheltered-shore-02498.herokuapp.com/api/shortURLs', { fullURL: this.state.fullURL })
			.then(res => console.log(res.data))
			.catch(err => {
				console.log(err);
			});
		alert('URL Submitted! Please refresh page to see!');
	};

	render() {
		return (
			<div>
				<h1 className="display-3">Welcome to Shrinker!</h1>
				<form className="form-group" onSubmit={this.handleSubmit}>
					<label></label>
					<input
						className="form-control"
						type="url"
						value={this.state.fullURL}
						onChange={this.handleUserURL}
						name="fullURL"
						id="fullURL"
						placeholder="Enter URL to shrink"
					/>
					<button
						className="btn btn-primary"
						type="submit"
						value="Submit"
						aria-hidden="true"
					>
						Submit
					</button>
				</form>
			</div>
		);
	}
}
export default Url;
