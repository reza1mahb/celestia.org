import * as React from "react";

async function copyToClipboard() {
	var text = window.location.href;
	try {
		await navigator.clipboard.writeText(text);
		console.log("Page URL copied to clipboard");
	} catch (err) {
		console.error("Failed to copy: ", err);
	}
}

const SocialShare = ({ url, title }) => {
	return (
		<div className={"social-share mb-4 mb-md-5"}>
			<div className={"row"}>
				<div className={"col-auto px-2"}>
					<a aria-label='Share on Facebook' target={"_blank"} rel='noreferrer' href={"https://www.facebook.com/sharer/sharer.php?u=" + url}>
						<i className={"icon-facebook"}></i>
					</a>
				</div>
				<div className={"col-auto px-2"}>
					<a
						aria-label='Share on Twitter'
						target={"_blank"}
						rel='noreferrer'
						href={"https://twitter.com/intent/tweet?text=" + title + "&url=" + url}
					>
						<i className={"icon-twitter"}></i>
					</a>
				</div>
				<div className={"col-auto px-2"}>
					<a
						aria-label='Share on Telegram'
						target={"_blank"}
						rel='noreferrer'
						href={"https://t.me/share/url?url=" + url + "&text=" + title}
					>
						<i className={"icon-telegram"}></i>
					</a>
				</div>
				<div className={"col-auto px-2"}>
					<div
						role='button'
						tabIndex='0'
						aria-label='Copy to clipboard'
						onClick={() => copyToClipboard()}
						onKeyDown={(event) => {
							if (event.key === "Enter") {
								copyToClipboard();
							}
						}}
					>
						<i className={"icon-copy"}></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SocialShare;
