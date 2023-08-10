import * as React from "react";

import { heroData } from "../datas/what-is-tia/hero-data";
import { getStarted } from "../datas/what-is-tia/get-started";
import { role } from "../datas/what-is-tia/role";
import { resources } from "../datas/what-is-tia/resources";
import { FooterBoxes } from "../datas/what-is-tia/content";

import Layout from "../components/layout";
import IconCard from "../components/modules/icon-card";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { seoContent } from "../datas/run-a-node/seoContent";
import SEO from "../components/seo";
import Image from "../components/imageComponent";

import image2 from "../images/what-is-tia/what-is-tia-custody-1.png";
import image3 from "../images/what-is-tia/what-is-tia-custody-2.png";

const DevPortal = () => {
	return (
		<Layout footerBoxes={FooterBoxes}>
			<SEO title={seoContent.title} description={seoContent.description} image={seoContent.image} />
			<div className={"what-is-tia"}>
				<main>
					<section className='hero'>
						<div className={"container"}>
							<h1 className={"main mb-3 mb-md-4"}>{heroData.title}</h1>
							<div className={"row"}>
								<div className={"col-auto"}>
									<div className={"subtitle"} dangerouslySetInnerHTML={{ __html: heroData.text }} />
									<AnchorLink
										to={`/run-a-light-node#${heroData.buttons[0].url}`}
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

					<section className='role'>
						<div className={"container"}>
							<div className={"row flex-wrap align-items-center justify-content-between my-2 pt-2 pt-lg-5 pb-3"}>
								<h2>{role.title}</h2>
								<div className='role-items d-flex justify-content-between'>
									{role.items.map(function (item) {
										return (
											<div className='role-card'>
												<div className='role-image-wrapper'>
													<Image alt={item.title} filename={item.image} />
												</div>
												<h3 className='role-card-title'>{item.title}</h3>
												<p className='role-card-text'>{item.text}</p>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</section>

					<section className={"custody-stacking"}>
						<div className={"container"}>
							<h2 className='custody-stacking-title'>Custody and staking</h2>
							<div className={"row justify-content-between align-items-center"}>
								<div className='col-12 col-lg-6'>
									<div className={"text-box"}>
										<h2 className='title'>You own your TIA</h2>
										<div className='custody-text-box'>
											<p>
												Anyone can download a non-custodial wallet to freely transact and control their TIA. No banks or
												intermediaries are trusted to do this for you.
											</p>
											<p>
												This does mean it’s important to{" "}
												<a href='/' target='_blank'>
													get familiar with basic wallet practices↗
												</a>{" "}
												for safely storing and transacting with TIA on Celestia.
											</p>
										</div>
									</div>
								</div>
								<div className={"image-box--node col-auto"}>
									<div className='image-wrapper'>
										<img className='img' style={{ width: `100%`, maxWidth: `470px` }} src={image2} alt={""} />
									</div>
								</div>
							</div>
							<div className={"row justify-content-between align-items-center"}>
								<div className={"image-box--node col-12 col-lg-6"}>
									<div className='image-wrapper'>
										<img className='img' style={{ width: `100%`, maxWidth: `470px` }} src={image2} alt={""} />
									</div>
								</div>
								<div className={"text-box col-12 col-lg-6"}>
									<h2 className='title'>Staking</h2>
									<div className='custody-text-box'>
										<p>
											Nodes on Celestia lock up (stake) TIA to{" "}
											<a href='/' target='_blank'>
												become a validator
											</a>{" "}
											that participates in consensus. Any node can enter the validator set if they have enough tokens to join
											the top 75 by stake.
										</p>
										<p>
											Users that don’t reach the top 75 or don’t want to run a validator can delegate their TIA to an existing
											validator that will stake it on their behalf. TIA delegations can always be retrieved from validators
											after undergoing a 3-week unbonding period.
											<div className='link-wrapper'>
												<a className='link' href="/">
													View Documentation
													<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'>
														<path
															stroke='#7B2BF9'
															stroke-linecap='square'
															stroke-width='1.5'
															d='M3.61218 12.0721L11.0761 4.60823'
														/>
														<path
															stroke='#7B2BF9'
															stroke-linecap='square'
															stroke-linejoin='bevel'
															stroke-width='1.5'
															d='M11.5254 11.0752V4.00413H4.45432'
														/>
													</svg>
												</a>
											</div>
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className={"start-up"} id={`${heroData.buttons[0]?.url.replace(/\s+/g, "-").toLowerCase()}`}>
						<div className={"container"}>
							<div className={"row justify-content-between align-items-center"}>
								<div className={"text-box col-12 col-lg-6"}>
									<h2 className='with-decor'>Start up a light node</h2>
									<p className='description'>
										There are many ways to run a Celestia light node. Pick an option that fits you best to get your light node up
										and running.
									</p>
								</div>
								<div className={"image-box--startup col-12 col-lg-6"}>
									<div className='image-wrapper'>
										<img src={image3} alt={""} />
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
