import React from "react";

const Linkedin = ({ url }) => {
	return (
		<a href={url} target={"_blank"} rel='noreferrer' aria-label='Linkedin link'>
			<i className={"icon-linkedin"} />
		</a>
	);
};

export default Linkedin;
