import * as React from "react";
export default class Whitepaper extends React.Component {
	render() {
		return (
			<div className='col col-12 col-sm-6 py-3'>
				<a href={this.props.data.url} target={"_blank"} rel={"noreferrer"} aria-label={this.props.data.title}>
					<div className={"whitepaper"}>
						<div className={"category"}>{this.props.data.topic}</div>
						<div className={"title"}>{this.props.data.title}</div>
						<div className={"subtitle"} dangerouslySetInnerHTML={{ __html: this.props.data.subtitle }} />

						<div className={"row mt-4"}>
							<div className={"col-auto"}>
								<span className={"button button-icon"} aria-label='View Document'>
									View Document<i className={"icon-document"}></i>
								</span>
							</div>
						</div>
					</div>
				</a>
			</div>
		);
	}
}
