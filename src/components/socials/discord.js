import React from "react";

const Discord = ({ url }) => {
	return (
		<a href={url} target={"_blank"} rel='noreferrer' aria-label='Discord link'>
			<i className={"icon-social-discord"} />
		</a>
	);
};

export default Discord;
