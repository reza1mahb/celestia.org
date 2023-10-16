import React from "react";
import Image from "../imageComponent";
import { Link } from "gatsby";

export default function CommunityItem({ imageClass, content, className }) {
	if (content.type === "internal") {
		return (
			<div className={className}>
				<Link className='link' to={`${content.url}`}>
					<div className={`community-item`}>
						<div className='link-wrapper'>
							<div className={`logo-container ${imageClass}`}>
								<Image alt={content.title} filename={content.image} />
							</div>
						</div>
						<div className='text-box'>
							<div className={"title"}>{content.title}</div>
							{content.text && <div className={"text"}>{content.text}</div>}
						</div>
					</div>
				</Link>
			</div>
		);
	} else if (content.type === "external" || content.type === undefined) {
		return (
			<div className={className}>
				<a className='link' href={content.url} target={"_blank"} rel={"noreferrer"} aria-label={content.text}>
					<div className={`community-item`}>
						<div className='link-wrapper'>
							<div className={`logo-container ${imageClass}`}>
								<Image alt={content.title} filename={content.image} />
							</div>
						</div>
						<div className='text-box'>
							<div className={"title"}>{content.title}</div>
							{content.text && <div className={"text"}>{content.text}</div>}
						</div>
					</div>
				</a>
			</div>
		);
	}
}
