/* eslint-disable no-restricted-globals */
import React from "react";
import "./HelpAudiences.css";
import capitolBldng from "../../images/capitolBuilding.jpg";
import rightArrow from "../../images/icons/rightArrowIcon.svg";

// Shows the content corresponding to the clicked button
function handleClick(e) {
	let others = document.getElementsByClassName("audienceContent");
	for (let num of others) {
		num.classList.remove("aShow");
		num.classList.add("aHide");
	}
	document.getElementById(`aContent${e.target.id}`).classList.toggle("aHide");
	activeBtn(e);
}

// Changes which button appears selected
function activeBtn(e) {
	let btns = document.getElementsByClassName("audienceBtn");
	for (let num of btns) {
		num.classList.remove("audienceBtnActive");
	}
	document.getElementById(e.target.id).classList.add("audienceBtnActive");
}

const HelpAudiences = () => {
	return (
		<section className="is--grayBg">
			<div className="audiencesContainer">
				<div className="audiencesTopWrap">
					<h3>How we can help you.</h3>
					<div className="audienceBtnWrap">
						<button
							className="audienceBtn audienceBtnActive"
							id="a1"
							onClick={(event) => handleClick(event)}
						>
							Government
						</button>
						<button
							className="audienceBtn"
							id="a2"
							onClick={(event) => handleClick(event)}
						>
							Policy Makers
						</button>
						<button
							className="audienceBtn"
							id="a3"
							onClick={(event) => handleClick(event)}
						>
							Healthcare Plans & Providers
						</button>
						<button
							className="audienceBtn"
							id="a4"
							onClick={(event) => handleClick(event)}
						>
							Philanthropy
						</button>
						<button
							className="audienceBtn"
							id="a5"
							onClick={(event) => handleClick(event)}
						>
							Academia
						</button>
						<button
							className="audienceBtn"
							id="a6"
							onClick={(event) => handleClick(event)}
						>
							Residents
						</button>
						<button
							className="audienceBtn"
							id="a7"
							onClick={(event) => handleClick(event)}
						>
							Media
						</button>
						<button
							className="audienceBtn"
							id="a8"
							onClick={(event) => handleClick(event)}
						>
							Researchers
						</button>
						<button
							className="audienceBtn"
							id="a9"
							onClick={(event) => handleClick(event)}
						>
							Prospective Employees
						</button>
					</div>
				</div>
				<div className="audiencesBtmWrap">
					<div className="audienceContent aHide aShow" id="aContenta1">
						<div className="aContentLeft">
							<img
								src={capitolBldng}
								alt="A capitol building with a car in the foreground"
								className="audienceImg"
							/>
						</div>
						<div className="aContentRight">
							<h4>Government</h4>
							<p className="pDark">
								We work togther with federal, state and local government
								agencies to identify eligible individuals in need of services,
								and develop critical strategies and reforms to streamline the
								benefits access landscape.
							</p>
							<div className="articleLinkWrap">
								<a href="/" className="mainLink is--topPadSmall">
									Our state partners
								</a>
								<img
									src={rightArrow}
									alt="right arrow icon"
									className="linkArrow"
								/>
							</div>
							<div className="articleLinkWrap">
								<a href="/" className="mainLink is--topPadSmall">
									Policy-related resources
								</a>
								<img
									src={rightArrow}
									alt="right arrow icon"
									className="linkArrow"
								/>
							</div>
							<div className="articleLinkWrap">
								<a href="/" className="mainLink is--topPadSmall">
									Contact us
								</a>
								<img
									src={rightArrow}
									alt="right arrow icon"
									className="linkArrow"
								/>
							</div>
						</div>
					</div>
					<div className="audienceContent aHide" id="aContenta2">
						<h4>Policy Makers</h4>
					</div>
					<div className="audienceContent aHide" id="aContenta3">
						<h4>Healthcare Plans & Providers</h4>
					</div>
					<div className="audienceContent aHide" id="aContenta4">
						<h4>Philanthropy</h4>
					</div>
					<div className="audienceContent aHide" id="aContenta5">
						<h4>Academia</h4>
					</div>
					<div className="audienceContent aHide" id="aContenta6">
						<h4>Residents</h4>
					</div>
					<div className="audienceContent aHide" id="aContenta7">
						<h4>Media</h4>
					</div>
					<div className="audienceContent aHide" id="aContenta8">
						<h4>Researchers</h4>
					</div>
					<div className="audienceContent aHide" id="aContenta9">
						<h4>Prospective Employees</h4>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HelpAudiences;
