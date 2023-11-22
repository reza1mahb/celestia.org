import React from "react";
import Image from "../imageComponent";

const Video = ({ url, title, image }) => {
	return (
		<a href={url} target='_blank' rel='noreferrer' aria-label={title}>
			<div className='video'>
				<div className={"image"}>
					<Image alt={title} filename={image} />
				</div>
				<div className={"title"}>{title}</div>
				<div className='play-button mt-2'>
					<i className='icon-play-button' /> Play
				</div>
			</div>
		</a>
	);
};

export default Video;
