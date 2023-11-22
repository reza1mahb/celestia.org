import * as React from "react";
import Image from "../imageComponent";
import Discord from "../socials/discord";
import Github from "../socials/github";
import Email from "../socials/email";
import Twitter from "../socials/twitter";
import Linkedin from "../socials/linkedin";

export default class TeamMember extends React.Component {
	render() {
		return (
			<div className={"member"}>
				<div className={"image mx-auto mx-sm-0"}>
					<div className={"overlay"} />
					<Image alt={this.props.member.name} filename={this.props.member.image} />
				</div>
				<div className='name'>{this.props.member.name}</div>
				<div className='title'>{this.props.member.title}</div>

				{this.props.member.text && <hr className={"mx-auto mx-sm-0"} />}
				{this.props.member.text && <div className='text m-auto m-sm-0'>{this.props.member.text}</div>}

				<div className={"socials"}>
					{this.props.member.socials.discord && <Discord url={this.props.member.socials.discord} />}
					{this.props.member.socials.github && <Github url={this.props.member.socials.github} />}
					{this.props.member.socials.email && <Email url={this.props.member.socials.email} />}
					{this.props.member.socials.twitter && <Twitter url={this.props.member.socials.twitter} />}
					{this.props.member.socials.linkedin && <Linkedin url={this.props.member.socials.linkedin} />}
				</div>
			</div>
		);
	}
}
