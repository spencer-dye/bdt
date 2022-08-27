import React from "react";
import "./InsightsSection.css";
import data from "../../exampleData/inights.js";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import rightArrow from "../../images/icons/rightArrowIcon.svg";

// Mapping the data for each article preview to the individual article preview components
const articles = data.map((article) => (
	<ArticlePreview
		key={article.id}
		id={article.id}
		title={article.title}
		date={article.publishedDate}
		articleType={article.articleType}
		cta={article.callToAction}
	/>
));

const InsightsSection = () => {
	return (
		<section>
			<div className="container is--divider">
				<div className="insightsHeader">
					<div>
						<h3>Latest Insights</h3>
						<p className="pDark is--topPadSmall">
							Check out what we've been working on recently
						</p>
					</div>
					<button className="altBtn">
						View all
						<img
							src={rightArrow}
							alt="an arrow pointing right"
							className="linkArrow"
						/>
					</button>
				</div>
				<div className="articlesWrap">{articles}</div>
			</div>
		</section>
	);
};

export default InsightsSection;
