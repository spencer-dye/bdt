import React, { useRef } from "react";
import { Link } from "react-router-dom";

import bdtLogo from "../../images/icons/bdt-logo-official.svg";
import dropdownIcon from "../../images/icons/dropdownIcon.svg";
import "./NavBar.css";

import TopNav from "../TopNav/TopNav";

const NavBar = () => {
	// useRef for mobile menu & button
	const primaryNavRef = useRef(null);
	const navToggleRef = useRef(null);

	// opens and closes the mobile menu
	const handleClick = () => {
		const visibility = primaryNavRef.current.getAttribute("data-visible");
		if (visibility === "false") {
			primaryNavRef.current.setAttribute("data-visible", true);
			navToggleRef.current.setAttribute("aria-expanded", true);
		} else {
			primaryNavRef.current.setAttribute("data-visible", false);
			navToggleRef.current.setAttribute("aria-expanded", false);
		}
	};

	return (
		<header>
			<TopNav />
			<nav>
				<div className="container navContainer">
					<img
						src={bdtLogo}
						alt="Benefits Data Trust Main Logo"
						className="logo"
					/>
					<button
						className="mobileNavToggle"
						aria-controls="primary-navigation"
						aria-expanded="false"
						onClick={handleClick}
						ref={navToggleRef}
					>
						<span className="sr-only">Menu</span>
					</button>
					<ul
						className="primaryNavigation"
						id="primary-navigation"
						data-visible="false"
						ref={primaryNavRef}
					>
						<li>
							<div className="navDropdown" tabIndex={0}>
								<button className="navLink">
									Who We Are
									<img
										src={dropdownIcon}
										alt="dropdown"
										className="dropdownIcon"
									/>
								</button>
								<ul className="navDropdownContent">
									<li>
										<Link to="/" className="navDropdownLink">
											Meet Our People
										</Link>
									</li>
									<li>
										<Link to="/" className="navDropdownLink">
											Our Board
										</Link>
									</li>
									<li>
										<Link to="/" className="navDropdownLink">
											Our Mission
										</Link>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<div className="navDropdown" tabIndex={0}>
								<button className="navLink">
									What We Do
									<img
										src={dropdownIcon}
										alt="dropdown"
										className="dropdownIcon"
									/>
								</button>
								<ul className="navDropdownContent">
									<li>
										<Link to="/" className="navDropdownLink">
											System Change Efforts
										</Link>
									</li>
									<li>
										<Link to="/" className="navDropdownLink">
											Healthcare Innovation
										</Link>
									</li>
									<li>
										<Link to="/" className="navDropdownLink">
											Research
										</Link>
									</li>
									<li>
										<Link to="/" className="navDropdownLink">
											Policy Tools
										</Link>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="/" className="navLink">
								Get Help
							</Link>
						</li>
						<li>
							<Link to="/" className="navLink">
								News & Insights
							</Link>
						</li>
						<input type="search" className="navSearch" placeholder="Search" />
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
