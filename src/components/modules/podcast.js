import React from "react";

const Podcast = ({ data }) => {
	return (
		<a href={data.url} target={"_blank"} rel='noreferrer' aria-label='Podcast link'>
			<div className='podcast'>
				<div className={"title"}>{data.title}</div>
				<div
					className={"subtitle"}
					dangerouslySetInnerHTML={{
						__html: data.subtitle,
					}}
				></div>
				<div className={"podcast-bottom"}>
					<div className={"row"}>
						<div className={"col col-12"}>
							<div className={"play-button"}>
								<i className={"icon-play-button"} aria-label='Play button' /> Listen
							</div>
						</div>
					</div>
				</div>
			</div>
		</a>
	);
};

export default Podcast;
