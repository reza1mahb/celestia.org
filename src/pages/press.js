import * as React from "react";

import { pressData } from "../datas/press/press-data";
import { FooterBoxes } from "../datas/press/content";
import Layout from "../components/layout";
import PressItem from "../components/modules/press-item";

import { seoContent } from "../datas/press/seoContent";
import SEO from "../components/seo";

const Press = () => {
	return (
		<Layout footerBoxes={FooterBoxes}>
			<SEO
				title={seoContent.title}
				description={seoContent.description}
                ogTitle={seoContent.ogTitle}
				image={seoContent.image}
			/>
			<div className={"press"}>
				<main>
					<div className={"container"}>
						<h1 className={"mb-3 mb-md-5"}>{pressData.title}</h1>
						<p className={"text"}>{pressData.text}</p>
					</div>

					<section className='card-grid'>
						<div className={"container"}>
							<div className='two-col-grid'>
								{pressData.items.map(function (item) {
									return <PressItem className='icon-card-wrapper' key={item.id} content={item} />;
								})}
							</div>
						</div>
					</section>
				</main>
			</div>
		</Layout>
	);
};

export default Press;