import React from "react";
import Image from "../imageComponent";

const Advantage = ({ key, title, text, image }) => {
	return (
		<div key={key} className={"col col-12 col-lg-3 gx-2 gy-2"}>
			<div className={"advantage col"}>
				<div className={"col image-wrapper"}>
					<Image alt={title} filename={image} />
				</div>
				<div className={"col col-12"}>
					<div className={"title"}>{title}</div>
					<div className={"text"} dangerouslySetInnerHTML={{ __html: text }}></div>
				</div>
			</div>
		</div>
	);
};

export default Advantage;
