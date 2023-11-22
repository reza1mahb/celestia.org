import React from "react";

const Github = ({ url }) => {
	return (
		<a href={url} target={"_blank"} rel='noreferrer' aria-label='Github link'>
			<i className={"icon-github"} />
		</a>
	);
};

export default Github;
