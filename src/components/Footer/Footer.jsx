import React from "react";
import "./Footer.css";
import bdtLogoWht from "../../images/icons/bdt-logo-white.svg";
import facebookLogo from "../../images/icons/social/facebook.svg";
import twitterLogo from "../../images/icons/social/twitter.svg";
import linkedinLogo from "../../images/icons/social/linkedin.svg";
import award1 from "../../images/icons/awards/aicpa.png";
import award2 from "../../images/icons/awards/seal-of-transparency.png";
import award3 from "../../images/icons/awards/top-workplaces.png";

const Footer = () => {
	return (
		<footer>
			<div className="container footerContainer">
				<div className="footerInfoWrap">
					<img
						src={bdtLogoWht}
						alt="The BDT logo in all white"
						className="footerLogo"
					/>
					<address>
						<p className="pLight is--whiteTxt">
							Center Square West<br></br>1500 Market St, Suite 2800<br></br>
							Philadelphia, PA 19102
						</p>
						<a href="tel:219-207-9100" className="footerLinks">
							(219) 207-9100
						</a>
						<div>
							<p className="slimP">
								General Inguiries:{" "}
								<a
									href="mailto:information@bdtrust.org"
									className="footerLinks"
								>
									information@bdtrust.org
								</a>
							</p>
							<p className="slimP">
								Media Inguiries:{" "}
								<a
									href="mailto:communications@bdtrust.org"
									className="footerLinks"
								>
									communications@bdtrust.org
								</a>
							</p>
						</div>
					</address>
					<ul className="footerLinkList">
						<p className="listTitle">More</p>
						<li>
							<a href="/" className="footerLinks">
								Frequently Asked Questions
							</a>
						</li>
						<li>
							<a href="/" className="footerLinks">
								Join Our Team
							</a>
						</li>
						<li>
							<a href="/" className="footerLinks">
								Contact Us
							</a>
						</li>
					</ul>
					<div>
						<p className="listTitle">Follow Us</p>
						<div className="footerSocialLinks">
							<a href="https://www.facebook.com/BenefitsDataTrust/">
								<img
									src={facebookLogo}
									alt="facebook logo"
									className="socialLogo"
								/>
							</a>
							<a href="https://twitter.com/BeneDataTrust">
								<img
									src={twitterLogo}
									alt="twitter logo"
									className="socialLogo"
								/>
							</a>
							<a href="https://www.linkedin.com/company/benefits-data-trust/">
								<img
									src={linkedinLogo}
									alt="linkedin logo"
									className="socialLogo"
								/>
							</a>
						</div>
					</div>
				</div>
				<div className="footerCopyrightWrap">
					<div className="copyright">
						<p className="copyrightTxt">
							2022 Benefits Data Trust. All Rights Reserved.
						</p>
						<a
							href="https://bdtrust.org/051121_CAC-Privacy-Notice-Statement_Final.pdf"
							className="privacyPolicy"
							target="_blank"
							rel="noreferrer"
						>
							Privacy Policy
						</a>
					</div>
					<div className="awardsWrap">
						<img
							src={award2}
							alt="Seal of Transparency Award"
							className="award"
						/>
						<img src={award1} alt="AICPA Award" className="award" />
						<img
							src={award3}
							alt="Top Work Places in 2021 Award"
							className="award"
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
