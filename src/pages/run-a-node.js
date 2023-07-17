import * as React from "react";

import { heroData } from "../datas/run-a-node/hero-data";
import { getStarted } from "../datas/run-a-node/get-started";
import { resources } from "../datas/run-a-node/resources";
import { FooterBoxes } from "../datas/run-a-node/content";

import Layout from "../components/layout";
import IconCard from "../components/modules/icon-card";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { seoContent } from "../datas/developer-portal/seoContent";
import SEO from "../components/seo";

import image1 from "../images/run-a-node/placeholder.png";

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
									<div className={"subtitle"} dangerouslySetInnerHTML={{ __html: heroData.text }} />
									<AnchorLink
										to={`/developer-portal#${heroData.buttons[0].url}`}
										className={"button button-" + heroData.buttons[0].class}
										stripHash
									>
										{heroData.buttons[0].text}
									</AnchorLink>
									<a
										href={`${heroData.buttons[1].url}`}
										className={"button button-" + heroData.buttons[1].class}
										target={"_blank"}
										rel={"noreferrer"}
									>
										{heroData.buttons[1].text}
									</a>
								</div>
							</div>
						</div>
					</section>

					<section className={"what-is-a-node"}>
						<div className={"container"}>
							<div className={"row justify-content-between align-items-center"}>
								<div className={"image-box--analogy col-12 col-lg-6"}>
									<div className='image-wrapper'>
										<img className='img' style={{ width: `100%`, maxWidth: `500px` }} src={image1} alt={""} />
									</div>
								</div>
								<div className={"text-box col-12 col-lg-6"}>
									<h2 className='title'>What is a node</h2>
									<p>
										Think of Celestia as a power grid, except instead of providing electricity, Celestia provides the essential
										resource to power a blockchain: consensus and data availability. Similar to how anyone can plug into an
										electricity grid to power their appliance, anyone can plug into Celestia’s network to power their own
										blockchain.
									</p>
									<h2 className='title'>What does it mean to ‘run’ a node</h2>
									<p>
										Think of Celestia as a power grid, except instead of providing electricity, Celestia provides the essential
										resource to power a blockchain: consensus and data availability. Similar to how anyone can plug into an
										electricity grid to power their appliance, anyone can plug into Celestia’s network to power their own
										blockchain.
									</p>
								</div>
							</div>
						</div>
					</section>

					<section className={"start-up"}>
						<div className={"container"}>
							<div className={"row justify-content-between align-items-center"}>
								<div className={"text-box col-12 col-lg-6"}>
									<h2 className='with-decor'>Start up a light node</h2>
									<p className='description'>
										Celestia gives developers the freedom to define their own sovereign chain, tailored for their
										application,Celestia gives developers the freedom to define their own sovereign chain, tailored for their
										applicationCelestia gives developers the freedom to define their own sovereign chain, tailored for their
										application
									</p>
								</div>
								<div className={"image-box--modular col-12 col-lg-6"}>
									<div className='image-wrapper'>
										<img src={image1} alt={""} />
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className='get-started'>
						<div className={"container"}>
							{getStarted.description && <div className={"description"}>{getStarted.description}</div>}
							<div className={"row gx-3 gy-3 pt-4 pb-3"}>
								{getStarted.items.map(function (item) {
									return (
										<IconCard
											className='icon-card-wrapper col-12 col-md min-width-33'
											key={item.id}
											content={item}
											variant={"anchor no-image"}
										/>
									);
								})}
							</div>
						</div>
					</section>

					<section className='resources' id={`${getStarted.items[2].title.replace(/\s+/g, "-").toLowerCase()}`}>
						<div className={"container"}>
							<div className={"row flex-wrap align-items-center justify-content-between my-2 pt-2 pt-lg-5 pb-3"}>
								<div className='col-12 col-xl-4 mb-5 mb-md-0'>
									<h2 className={"with-decor"}>{resources.title}</h2>
									{resources.description && <div className={"description"}>{resources.description}</div>}
								</div>
								<div className='col-12 col-xl-8'>
									<div className='gx-3 gy-5 row'>
										{resources.items.map(function (item) {
											return (
												<IconCard
													className='icon-card-wrapper col-12 col-md-4'
													key={item.id}
													content={item}
													variant={"vertical"}
												/>
											);
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
