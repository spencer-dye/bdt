import React from "react";
import { Helmet } from "react-helmet";

import {
	NavBar,
	Hero,
	HelpAudiences,
	Impact,
	Partners,
	Slider,
	InsightsSection,
	Newsletter,
	Footer,
} from "../components";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Home - Benefits Data Trust</title>
				<meta
					name="Benefits Data Trust | BDT | Connecting People to Benefits"
					content="Harnessing the power of data, technology, and policy to provide efficient and dignified access to assistance."
				/>
			</Helmet>
			<NavBar />
			<Hero />
			<HelpAudiences />
			<Impact />
			<Partners />
			<Slider />
			<InsightsSection />
			<Newsletter />
			<Footer />
		</>
	);
};

export default Home;
