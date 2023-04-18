import React from "react";
import Image from "../imageComponent";

export default function IconCard({content, flexDirection}) {
	return (
		<a className="col" href={content.url} target={"_blank"} rel={"noreferrer"}>
			<div className={`icon-card ${flexDirection}`}>
				<div className={"logo-container"}>
					<Image alt={content.title} filename={content.image} />
				</div>
				<div className="text-box">
					<div className={"title"}>{content.title}</div>
					<div className={"text"}>{content.text}</div>
				</div>
			</div>
		</a>
	);
}
