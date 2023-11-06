import * as React from "react";

import { heroData } from "../datas/run-a-node/hero-data";
import { getStarted } from "../datas/run-a-node/get-started";
import { resources } from "../datas/run-a-node/resources";
import { FooterBoxes } from "../datas/run-a-node/content";

import Layout from "../components/layout";
import IconCard from "../components/modules/icon-card";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { seoContent } from "../datas/run-a-node/seoContent";
import SEO from "../components/seo";

import image2 from "../images/run-a-node/run-a-node-2.png";
import image3 from "../images/run-a-node/run-a-node-3.png";

const DevPortal = () => {
	return (
		<Layout footerBoxes={FooterBoxes}>
			<SEO title={seoContent.title} description={seoContent.description} image={seoContent.image} />
			<div className={"run-a-node"}>
				<main>
					<section className='hero'>
						<div className={"container"}>
							<h1 className={"main mb-3 mb-md-4"}>{heroData.title}</h1>
							<div className={"row"}>
								<div className={"col-auto"}>
									<div className={"text"} dangerouslySetInnerHTML={{ __html: heroData.text }} />
									<AnchorLink to={`/run-a-light-node#${heroData.buttons[0].url}`} className={"button button-" + heroData.buttons[0].class} stripHash>
										{heroData.buttons[0].text}
									</AnchorLink>
									{/* <a
										href={`${heroData.buttons[1].url}`}
										className={"button button-" + heroData.buttons[1].class}
										target={"_blank"}
										rel={"noreferrer"}w
									>
										{heroData.buttons[1].text}
									</a> */}
								</div>
							</div>
						</div>
					</section>

					<section className={"what-is-a-node"}>
						<div className={"container"}>
							<div className={"row justify-content-between align-items-center"}>
								<div className={"image-box--node col-12 col-lg-6"}>
									<div className='image-wrapper'>
										<img className='img' style={{ width: `100%`, maxWidth: `500px` }} src={image2} alt={""} />
									</div>
								</div>
								<div className={"text-box col-12 col-lg-6"}>
									<h2 className='title'>What is a node?</h2>
									<p>
										A node is a piece of software that runs on a device like a computer or a phone. Generally, a node verifies that a blockchain works
										correctly and follows the rules. “Verifying” a blockchain can involve tasks like checking transactions are correct.
									</p>
									<h2 className='title'>What is a Celestia light node?</h2>
									<p>
										Light nodes sound like you might expect. They are nodes that can run on cheaper hardware and slower internet connections than
										other node types. The lower requirements make it more accessible for anyone to run a node that verifies the chain.
									</p>
								</div>
							</div>
						</div>
					</section>

					<section className={"start-up"} id={`${heroData.buttons[0]?.url.replace(/\s+/g, "-").toLowerCase()}`}>
						<div className={"container"}>
							<div className={"row justify-content-center align-items-center"}>
								<h2 className='with-decor'>Start up a light node</h2>
								<p className='description'>
									There are many ways to run a Celestia light node. Pick an option that fits you best to get your light node up and running.
								</p>
							</div>
						</div>
					</section>

					<section className='get-started'>
						<div className={"container"}>
							{getStarted.description && <div className={"description"}>{getStarted.description}</div>}
							<div className={"row gx-3 gy-3 pt-4 pb-3"}>
								{getStarted.items.map(function (item) {
									return (
										<IconCard className='icon-card-wrapper col-12 col-md min-width-33' key={item.id} content={item} variant={"anchor no-image"} />
									);
								})}
							</div>
						</div>
					</section>

					<section className='resources' id={`${getStarted.items[1].title.replace(/\s+/g, "-").toLowerCase()}`}>
						<div className={"container"}>
							<div className={"row flex-wrap align-items-center justify-content-between my-2 pt-2 pt-lg-5 pb-3"}>
								<div className='col-12 col-xl-4 mb-5 mb-md-0'>
									<h2 className={"with-decor"}>{resources.title}</h2>
									{resources.description && <div className={"description"}>{resources.description}</div>}
								</div>
								<div className='col-12 col-xl-8'>
									<div className='gx-3 gy-5 row'>
										{resources.items.map(function (item) {
											return <IconCard className='icon-card-wrapper col-12 col-md-4' key={item.id} content={item} variant={"vertical"} />;
										})}
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
		</Layout>
	);
};

export default DevPortal;
