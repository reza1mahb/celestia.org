import React from "react";
import Advantage from "../modules/advantage";

const AdvantagesSection = ({ advantages }) => {
	return (
		<section className='advantages-container'>
			<div className='row'>
				{advantages &&
					advantages.map(({ id, animation, text, title, image }) => (
						<Advantage key={id} id={id} animation={animation} text={text} title={title} image={image} />
					))}
			</div>
		</section>
	);
};

export default AdvantagesSection;
