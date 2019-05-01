import React from "react";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Layout = (props) => {
	return (
		<>
			<Navbar appName={props.appName} />
			<main>{props.children}</main>
			<Footer />
		</>
	);
};

export default Layout;
