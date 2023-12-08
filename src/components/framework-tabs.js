import React, { useState } from "react";
import IconCard from "./modules/icon-card";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const FrameworkTabs = ({ content, categories, anchorId }) => {
	const [selectedTab, setSelectedTab] = useState("all");

	const allUniqueCategories = [...new Set(categories.items.flatMap((item) => item.category))];

	console.log(allUniqueCategories);

	return (
		<section className='frameworks' id={`${content.items[anchorId].title.replace(/\s+/g, "-").toLowerCase()}`}>
			<div className={"container"}>
				<div className={"subtitle"}>{categories.subtitle}</div>
				<h2 className={"text-center"}>{categories.title}</h2>
				{categories.description && <div className={"description text-center mx-auto mt-3"}>{categories.description}</div>}

				<div className={"tabs row justify-content-center"}>
					<div className={`col-auto tab-item ${selectedTab === "all" && "active"}`} onClick={() => setSelectedTab("all")}>
						All
					</div>
					{allUniqueCategories.map(function (category) {
						return (
							<div className={`col-auto tab-item ${selectedTab === category && "active"}`} onClick={() => setSelectedTab(category)}>
								{category}
							</div>
						);
					})}
				</div>

				<div className={""}>
					<div className={"row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-3 gy-5 gy-md-3 my-2 pt-0 pt-md-4 pb-3"}>
						{selectedTab === "all"
							? categories.items.map((item) => (
									<IconCard
										className='icon-card-wrapper col'
										key={item.id}
										content={item}
										variant={"vertical"}
										btnClass={
											"plausible-event-name=Framework_Click_" +
											item.title.replace(/\s/g, "+") +
											"--Developer_Portal_Page-Framework_section"
										}
									/>
							  ))
							: categories.items
									.filter((item) => item.category.includes(selectedTab))
									.map((item) => (
										<IconCard
											className='icon-card-wrapper col'
											key={item.id}
											content={item}
											variant={"vertical"}
											btnClass={
												"plausible-event-name=Framework_Click_" +
												item.title.replace(/\s/g, "+") +
												"--Developer_Portal_Page-Framework_section"
											}
										/>
									))}
					</div>
				</div>

				{anchorId === 0 && (
					<AnchorLink className='link' to={`/developer-portal#${content.items[2].title.replace(/\s+/g, "-").toLowerCase()}`} stripHash>
						<div className={"button button-simple mx-auto d-table mt-4"}>Integrate with Celestia</div>
					</AnchorLink>
				)}
			</div>
		</section>
	);
};

export default FrameworkTabs;
