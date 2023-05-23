import * as React from "react";
import Image from "../imageComponent";
import handleViewport from "react-in-viewport";

class Advantage extends React.Component {
	getInViewPort() {
		const { inViewport, enterCount, leaveCount } = this.props;
		let counter = enterCount - leaveCount;
		if (inViewport && counter === 1) {
			return true;
		} else {
			return false;
		}
	}
	render() {
		return (
			<div key={this.props.id} className={"col col-12 col-lg-3 gx-2 gy-2"}>
				<div className={"advantage col"}>
					<div className={"col image-wrapper"}>
						<Image alt={this.props.title} filename={this.props.image} />
					</div>
					<div className={"col col-12"}>
						<div className={"title"}>{this.props.title}</div>
						<div className={"text"}>{this.props.text}</div>
					</div>
				</div>
			</div>
		);
	}
}

const AdvantageBlock = handleViewport(Advantage, { rootMargin: "-1.0px" });

export default AdvantageBlock;
