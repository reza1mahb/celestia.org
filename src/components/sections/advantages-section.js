import * as React from "react";
import Advantage from "../modules/advantage";
import Button from "../buttons/button";

export default class AdvantagesSection extends React.Component {
	render() {
		return (
			<section className={"advantages-container"}>
				<div className={"row"}>
					{this.props.advantages &&
						this.props.advantages.map(function (advantage) {
							return (
								<Advantage
									id={advantage.id}
									animation={advantage.animation}
									text={advantage.text}
									title={advantage.title}
									image={advantage.image}
								/>
							);
						})}
				</div>
			</section>
		);
	}
}
