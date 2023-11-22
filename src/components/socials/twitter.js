import React from "react";

const Twitter = ({ url }) => {
	return (
		<a href={url} target={"_blank"} rel='noreferrer' aria-label='Twitter link'>
			<i className={"icon-twitter"} />
		</a>
	);
};

export default Twitter;
