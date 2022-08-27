import React from "react";
import TopNav from "../components/TopNav/TopNav";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import HelpAudiences from "../components/HelpAudiences/HelpAudiences";
import Impact from "../components/Impact/Impact";
import Partners from "../components/Partners/Partners";
import Slider from "../components/Slider/Slider";
import InsightsSection from "../components/InsightsSection/InsightsSection";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

const Home = () => {
	return (
		<>
			<header>
				<TopNav />
				<NavBar />
			</header>
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
