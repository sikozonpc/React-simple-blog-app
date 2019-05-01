import React from "react";

import classes from "./Navbar.module.css";

const Navbar = () => {
	return (
		<ul>
			<li className={classes.Link}>
				<a
					href="#home"
					style={{
						color: "inherit",
						fontSize: "30px",
						fontWeight: "bold",
						textDecoration: "none",
					}}
				>
					Blogy
				</a>
			</li>
		</ul>
	);
};

export default Navbar;
