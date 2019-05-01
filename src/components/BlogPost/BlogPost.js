import React from "react";
import classes from "./BlogPost.module.css";

const BlogPost = (props) => {
	return (
		<div className={classes.Post}>
			<h2>{props.title}</h2>
			<p>{props.desc}</p>
		</div>
	);
};

export default BlogPost;
