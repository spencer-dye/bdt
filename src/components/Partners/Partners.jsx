import React from "react";
import "./Partners.css";
import partnerImg from "../../images/bdtPartners.jpg";

const Partners = () => {
	return (
		<section>
			<div className="container partnerContainer">
				<div className="partnersContent">
					<h2>Our Partners</h2>
					<p className="pDark is--topPad">
						Together with a national network of partners, we work to influence
						change and build solutions to provide more dignified, equitable, and
						efficient benefits access.
					</p>
					<div className="btnWrapSml">
						<button className="mainBtn">Learn more</button>
					</div>
				</div>
				<img
					src={partnerImg}
					alt="Two businesswomen chatting with a large window in the background"
					className="partnerImg"
				/>
			</div>
		</section>
	);
};

export default Partners;
