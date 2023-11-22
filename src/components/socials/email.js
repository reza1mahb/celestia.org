import React from "react";

const Email = ({ url }) => {
	return (
		<a href={url} target={"_blank"} rel='noreferrer' aria-label='Email link'>
			<i className={"icon-email"} />
		</a>
	);
};

export default Email;
