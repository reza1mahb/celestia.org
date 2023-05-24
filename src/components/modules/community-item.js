import React from "react";
import Image from "../imageComponent";
import { Link } from "gatsby";

export default function CommunityItem({ imageClass, content, className }) {
	if (content.type === "internal") {
		return (
			<div className={className}>
				<div className={`community-item`}>
					<div className='link-wrapper'>
						<Link className='link' to={`${content.url}`}>
							<div className={`logo-container ${imageClass}`}>
								<Image alt={content.title} filename={content.image} />
							</div>
						</Link>
					</div>
					<div className='text-box'>
						<div className={"title"}>{content.title}</div>
						{content.text && <div className={"text"}>{content.text}</div>}
					</div>
				</div>
			</div>
		);
	} else if (content.type === "external" || content.type === undefined) {
		return (
			<div className={className}>
				<div className={`community-item`}>
					<div className='link-wrapper'>
						<a className='link' href={content.url} target={"_blank"} rel={"noreferrer"} aria-label={content.text}>
							<div className={`logo-container ${imageClass}`}>
								<Image alt={content.title} filename={content.image} />
							</div>
						</a>
					</div>
					<div className='text-box'>
						<div className={"title"}>{content.title}</div>
						{content.text && <div className={"text"}>{content.text}</div>}
					</div>
				</div>
			</div>
		);
	}
}
