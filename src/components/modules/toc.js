import React, { useState } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const ToC = ({ headings }) => {
	const [selectedItem, setSelectedItem] = useState(0);

	const handleItemClick = (index) => {
		setSelectedItem(index);
	};

	return (
		<div className={"toc-item"}>
			{headings.map((heading, index) => {
				if (heading.depth === 4) {
					return (
						<div
							key={index}
							className={selectedItem === index ? "selected" : ""}
							onClick={() => handleItemClick(index)}
							onKeyDown={() => handleItemClick(index)}
							role='button'
							tabIndex={0}
						>
							<AnchorLink to={`#${heading.id.replace(/\s+/g, "-").toLowerCase()}`} stripHash smoothScroll>
								{heading.value}
							</AnchorLink>
						</div>
					);
				} else {
					return null;
				}
			})}
		</div>
	);
};

export default ToC;
