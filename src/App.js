import React, { Component } from "react";
import "./App.css";

import Home from "./containers/Home/Home";
import Layout from "./containers/Layout/Layout";

class App extends Component {
	state = {
		apptitle: "Blogy",
		blogPosts: [],
	};

	componentDidMount() {
		// Fetch posts from back-end and store them in state
		// Dummy data:
		this.setState({
			blogPosts: [
				{
					id: 1,
					title: "React is awesome!",
					desc: "Did you know React is open sourced ?",
				},
				{
					id: 2,
					title: "Another blog post",
					desc: "Just another dummy blog post...",
				},
				{
					id: 3,
					title: "What is JSX",
					desc:
						"JSX is a funny tag syntax is neither a string nor HTML.",
				},
			],
		});
	}

	render() {
		return (
			<div className="App">
				<Layout apptitle={this.state.apptitle}>
					{/* Inside the Layout tags are its childs */}
					<Home posts={this.state.blogPosts} />
				</Layout>
			</div>
		);
	}
}

export default App;
