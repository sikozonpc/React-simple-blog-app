import React, { Component } from "react";

import BlogPost from "../../components/BlogPost/BlogPost";

import classes from "./Home.module.css";

class Home extends Component {
	render() {
		const posts = this.props.posts.map((post) => {
			return (
				<BlogPost key={post.id} title={post.title} desc={post.desc} />
			);
		});

		return <div className={classes.Home}>{posts}</div>;
	}
}

export default Home;
