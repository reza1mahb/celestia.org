import React from "react";
import Image from "../imageComponent";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function IconCard({ content, flexDirection, iconPosition = "center" }) {
	if (content.type === "internal") {
		return (
			<Link to={`${content.url}`} id={"internal"}>
				<div className={`icon-card ${flexDirection}`}>
					<div className={`logo-container ${iconPosition}`}>
						<Image alt={content.title} filename={content.image} />
					</div>
					<div className='text-box'>
						<div className={"title"}>{content.title}</div>
						{content.text && <div className={"text"}>{content.text}</div>}
					</div>
				</div>
			</Link>
		);
	} else if (content.type === "external" || content.type === undefined) {
		return (
			<a href={content.url} target={"_blank"} rel={"noreferrer"} aria-label={content.text} id={"external"}>
				<div className={`icon-card ${flexDirection}`}>
					<div className={`logo-container ${iconPosition}`}>
						<Image alt={content.title} filename={content.image} />
					</div>
					<div className='text-box'>
						<div className={"title"}>{content.title}</div>
						{content.text && <div className={"text"}>{content.text}</div>}
					</div>
				</div>
			</a>
		);
	} else if (content.type === "anchor" || content.type === undefined) {
		return (
			<AnchorLink to={`/developer-portal#${content.title.replace(/\s+/g, "-").toLowerCase()}`}>
				<div className={`icon-card ${flexDirection}`}>
					<div className={`logo-container ${iconPosition}`}>
						<Image alt={content.title} filename={content.image} />
					</div>
					<div className='text-box'>
						<div className={"title"}>{content.title}</div>
						{content.text && <div className={"text"}>{content.text}</div>}
					</div>
				</div>
			</AnchorLink>
		);
	}
}
