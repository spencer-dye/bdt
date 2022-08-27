import React from "react";
import "./TopNav.css";

const TopNav = () => {
	return (
		<div className="topNav">
			<div className="container topNavContainer">
				<a className="topNavLink" href="/">
					Contact us
				</a>
				<button href="/" className="topNavBtn">
					Join the team
				</button>
			</div>
		</div>
	);
};

export default TopNav;
