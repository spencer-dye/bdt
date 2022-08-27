import React from "react";
import "./CardGrid.css";
import accessIcon from "../../images/icons/accessEligibility.svg";
import healthcareIcon from "../../images/icons/healthcareIcon.svg";
import policyIcon from "../../images/icons/policyIcon.svg";
import rightArrow from "../../images/icons/rightArrowIcon.svg";

const CardGrid = () => {
	return (
		<div className="container heroCardGrid">
			<div className="heroCard">
				<div className="heroCardInnerContent">
					<img
						src={accessIcon}
						alt="An icon representing a mouse click on an application"
						className="cardIcon"
					/>
					<h3>Enrollment Services</h3>
					<p className="pDark is--topPadSmall">
						Every person should easily receive assistance they are eligible for
						when they need it. To achieve that, we provide data-driven outreach,
						online tools and assistance in applying over the phone to
						efficiently connect people to available assistance.
					</p>
				</div>
				<div className="cardBtm">
					<a href={"/"} className="mainLink">
						Learn more
					</a>
					<img src={rightArrow} alt="right arrow icon" className="linkArrow" />
				</div>
			</div>
			<div className="heroCard">
				<div className="heroCardInnerContent">
					<img
						src={healthcareIcon}
						alt="An icon representing a mouse click on an application"
						className="cardIcon"
					/>
					<h3>Healthcare Innovation</h3>
					<p className="pDark is--topPadSmall">
						Healthcare entities have a unique opportunity to connect people to
						benefits that improve health and reduce unnecessary healthcare
						costs. We work with health plans, integrated delivery networks, and
						other healthcare partners to help their members and patients access
						assistance programs with ease.
					</p>
				</div>
				<div className="cardBtm">
					<a href={"/"} className="mainLink">
						Learn more
					</a>
					<img src={rightArrow} alt="right arrow icon" className="linkArrow" />
				</div>
			</div>
			<div className="heroCard">
				<div className="heroCardInnerContent">
					<img
						src={policyIcon}
						alt="An icon representing a mouse click on an application"
						className="cardIcon"
					/>
					<h3>Public Policy & Practice Change</h3>
					<p className="pDark is--topPadSmall">
						Too often, assistance programs are burdensome for families to access
						and for government agencies to administer. We help government
						leaders test and adopt policy and practice solutions that bring more
						equity and efficiency to benefits access.
					</p>
				</div>
				<div className="cardBtm">
					<a href={"/"} className="mainLink">
						Learn more
					</a>
					<img src={rightArrow} alt="right arrow icon" className="linkArrow" />
				</div>
			</div>
		</div>
	);
};

export default CardGrid;
