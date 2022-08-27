import React from "react";
import rightArrow from "../../images/icons/rightArrowIcon.svg";
import "./ArticlePreview.css";

const ArticlePreview = (props) => {
	return (
		<div className="articleEntry">
			<div>
				<p className="chip">{props.articleType}</p>
				<h4 className="is--topPadSmall">{props.title}</h4>
				<h6>{props.date}</h6>
			</div>
			<div className="articleLinkWrap">
				<a href="/" className="mainLink is--topPadSmall">
					{props.cta}
				</a>
				<img src={rightArrow} alt="right arrow icon" className="linkArrow" />
			</div>
		</div>
	);
};

export default ArticlePreview;
