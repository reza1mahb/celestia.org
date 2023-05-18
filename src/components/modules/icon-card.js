import React from "react";
import Image from "../imageComponent";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function IconCard({ imageClass, content, variant, iconPosition = "top", className }) {
	if (content.type === "internal") {
		return (
			<div className={className}>
				<div className={`icon-card ${variant}`}>
					{content.image && (
						<div className={`logo-container ${iconPosition} ${imageClass}`}>
							<Image alt={content.title} filename={content.image} />
						</div>
					)}
					<div className='text-box'>
						<div className={"title"}>{content.title}</div>
						{content.text && <div className={"text"}>{content.text}</div>}
						<div className='link-wrapper'>
							<Link className='link' to={`${content.link.url}`}>
								{content.link.text}
								<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'>
									<path stroke='#7B2BF9' stroke-linecap='square' stroke-width='1.5' d='M3.61218 12.0721L11.0761 4.60823' />
									<path
										stroke='#7B2BF9'
										stroke-linecap='square'
										stroke-linejoin='bevel'
										stroke-width='1.5'
										d='M11.5254 11.0752V4.00413H4.45432'
									/>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	} else if (content.type === "external" || content.type === undefined) {
		return (
			<div className={className}>
				<div className={`icon-card ${variant}`}>
					{content.image && (
						<div className={`logo-container ${iconPosition} ${imageClass}`}>
							<Image alt={content.title} filename={content.image} />
						</div>
					)}
					<div className='text-box'>
						<div className={"title"}>{content.title}</div>
						{content.text && <div className={"text"}>{content.text}</div>}
						<div className='link-wrapper'>
							<a className='link' href={content.link.url} target={"_blank"} rel={"noreferrer"} aria-label={content.text}>
								{content.link.text}
								<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'>
									<path stroke='#7B2BF9' stroke-linecap='square' stroke-width='1.5' d='M3.61218 12.0721L11.0761 4.60823' />
									<path
										stroke='#7B2BF9'
										stroke-linecap='square'
										stroke-linejoin='bevel'
										stroke-width='1.5'
										d='M11.5254 11.0752V4.00413H4.45432'
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	} else if (content.type === "anchor") {
		return (
			<div className={className}>
				<div className={`icon-card ${variant}`}>
					{content.image && (
						<div className={`logo-container ${iconPosition} ${imageClass}`}>
							<Image alt={content.title} filename={content.image} />
						</div>
					)}
					<div className='text-box'>
						<div className={"title"}>{content.title}</div>
						{content.text && <div className={"text"}>{content.text}</div>}
						<div className='link-wrapper'>
							<AnchorLink className='link' to={`/developer-portal#${content.title.replace(/\s+/g, "-").toLowerCase()}`}>
								{content.link.text}
								<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none'>
									<path stroke='#7B2BF9' stroke-linecap='square' stroke-width='1.5' d='M6.89106 1.34961L6.89106 11.9052' />
									<path
										stroke='#7B2BF9'
										stroke-linecap='square'
										stroke-linejoin='bevel'
										stroke-width='1.5'
										d='M2 7.64941L7 12.6494L12 7.64942'
									/>
								</svg>
							</AnchorLink>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
