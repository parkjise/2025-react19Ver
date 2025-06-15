import React from "react";
import { useState } from "react";
import Navigation from "./nav";
const Header = (props) => {
	const [active, setActive] = useState("active");
	const [keywords, setKeywords] = useState("");
	const handleChange = (e) => {
		const value = e.target.value === "" ? "active" : "not-active";
		setKeywords(e.target.value);
		setActive(value);
	};
	console.log(props);
	return (
		<header className={active}>
			<div className="logo">LOGO</div>
			<input type="text" onChange={props.getKeyword} />
			The Keywords are : {keywords}
			<Navigation />
		</header>
	);
};

export default Header;
