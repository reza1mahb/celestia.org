import * as React from "react";
import Image from "../imageComponent";

export default class Resource extends React.Component {
	renderContent() {
		if (this.props.data) {
			var image = "";
			var category = "";
			var url = this.props.data && this.props.data.url !== "" ? this.props.data.url : "";

			switch (this.props.data.category) {
				case "blog":
					category = "Blog";

					if (this.props.data && this.props.data.image) {
						image = (
							<div className={"image-container full"}>
								<img alt={""} src={this.getImage()} />
							</div>
						);
					} else {
						image = (
							<div className={"image-container full"}>
								<Image alt={""} filename={"resources/placeholders/blog.png"} />
							</div>
						);
					}
					break;
				case "article":
					category = "Blog";

					if (this.props.data && this.props.data.image) {
						image = (
							<div className={"image-container"}>
								<Image alt={""} filename={this.getImage()} />
							</div>
						);
					} else {
						image = (
							<div className={"image-container"}>
								<Image alt={""} filename={"resources/placeholders/blog.png"} />
							</div>
						);
					}

					break;
				case "video":
					category = "Video";
					if (this.props.data && this.props.data.image) {
						image = (
							<div className={"image-container"}>
								<Image alt={""} filename={this.getImage()} />
							</div>
						);
					} else {
						image = (
							<div className={"image-container"}>
								<Image alt={""} filename={"resources/placeholders/video.png"} />
							</div>
						);
					}

					break;
				case "communitypost":
					category = "Community post";
					if (this.props.data && this.props.data.image) {
						image = (
							<div className={"image-container"}>
								<Image alt={""} filename={this.getImage()} />
							</div>
						);
					} else {
						image = (
							<div className={"image-container"}>
								<Image alt={""} filename={"resources/placeholders/blog.png"} />
							</div>
						);
					}

					break;
				case "podcast":
					category = "Podcast";
					image = (
						<div className={"image-container icon"}>
							<Image alt={""} filename={"resources/placeholders/podcast.png"} />
						</div>
					);
					break;
				case "whitepaper":
					category = "Whitepaper";
					image = (
						<div className={"image-container icon"}>
							<Image alt={""} filename={"resources/placeholders/whitepaper.png"} />
						</div>
					);
					break;
				default:
					if (this.props.data && this.props.data.image) {
						image = (
							<div className={"image-container"}>
								<img alt={""} src={this.getImage()} />
							</div>
						);
					} else {
						image = (
							<div className={"image-container"}>
								<Image alt={""} filename={"resources/placeholders/detail.png"} />
							</div>
						);
					}
					break;
			}

			return (
				<div className={"resource type-" + this.props.type + " " + this.props.class}>
					<a href={url} target={"_blank"} rel={"noreferrer"}>
						{image}
						<div className={"text-container"}>
							<div className={"category"}>{category}</div>
							<div className={"title"}>{this.props.data && this.props.data.title}</div>
							<div className={"text"} dangerouslySetInnerHTML={{ __html: this.props.data && this.props.data.text }} />
							{this.getButton()}
						</div>
						<div className={"clear"} />
					</a>
				</div>
			);
		} else {
			return "";
		}
	}

	getImage() {
		if (this.props.data && this.props.data.category === "whitepaper") {
			return "whitepaper-icon.svg";
		} else if (this.props.data && this.props.data.category === "podcast") {
			return "podcast-icon.svg";
		} else {
			if (this.props.data && this.props.data.image) {
				return this.props.data.image;
			} else {
				return "resources/placeholders/detail.png";
			}
		}
	}
	getButton() {
		if (this.props.data && this.props.data.category === "whitepaper") {
			return (
				<div className={"button button-icon"}>
					Download <i className={"icon-download"}></i>
				</div>
			);
		} else if (this.props.data && this.props.data.category === "podcast") {
			return (
				<div className={"button button-icon"}>
					Listen <i className={"icon-play-button"}></i>
				</div>
			);
		} else if (this.props.data && this.props.data.category === "video") {
			return (
				<div className={"button button-icon"}>
					Play <i className={"icon-play-button"}></i>
				</div>
			);
		} else {
			if (this.props.data && this.props.data.url) {
				return (
					<div className={"button button-external"}>
						Read now <i className={"icon-external-link"}></i>
					</div>
				);
			} else {
				return false;
			}
		}
	}
	render() {
		return this.renderContent();
	}
}
