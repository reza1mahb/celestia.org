
import * as React from "react";

import { heroData } from "../datas/what-is-tia/hero-data";
import { role } from "../datas/what-is-tia/role";
import { wallets } from "../datas/what-is-tia/wallets";
import { FooterBoxes } from "../datas/what-is-tia/content";

import Layout from "../components/layout";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { seoContent } from "../datas/run-a-node/seoContent";
import SEO from "../components/seo";
import Image from "../components/imageComponent";

import image1 from "../images/what-is-tia/what-is-tia-custody-1.png";
import image2 from "../images/what-is-tia/what-is-tia-custody-2.png";

const WhatIsTIA = () => {
	return (
		<Layout footerBoxes={FooterBoxes}>
			<SEO title={seoContent.title} description={seoContent.description} image={seoContent.image} />
			<div className={"what-is-tia"}>
				<main>
					<section className='hero'>
						<div className={"container"}>
							<h1 className={"main mb-3 mb-md-4"}>{heroData.title}</h1>
							<div className={"main-text row"}>
								<div className={"col-auto"}>
									<div className={"subtitle"} dangerouslySetInnerHTML={{ __html: heroData.text }} />
									<AnchorLink
										to={`/what-is-tia#${heroData.buttons[0].url}`}
										className={"mb-3 button button-" + heroData.buttons[0].class}
										stripHash
									>
										{heroData.buttons[0].text}
									</AnchorLink>
									<AnchorLink
										to={`/what-is-tia#${heroData.buttons[1].url}`}
										className={"mb-3 button button-" + heroData.buttons[1].class}
										stripHash
									>
										{heroData.buttons[1].text}
									</AnchorLink>
								</div>
							</div>
						</div>
					</section>

					<section className='tia-role'>
						<div className={"container"}>
							<div className={"row flex-wrap align-items-center justify-content-between"}>
								<h2>{role.title}</h2>
								<div className='role-items'>
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

					<section className={"custody-stacking"} id={`${heroData.buttons[1]?.url.replace(/\s+/g, "-").toLowerCase()}`}>
						<div className={"container"}>
							<h2 className='custody-stacking-title'>Custody and staking</h2>
							<div className={"d-flex flex-column flex-lg-row custody-stacking-item justify-content-between align-items-lg-center"}>
								<div className='col-12 col-lg-6 order-1 order-lg-0'>
									<div className={"text-box"}>
										<h2 className='title'>You own your TIA</h2>
										<div className='custody-text-box'>
											<p>
												Anyone can download a non-custodial wallet to freely transact and control their TIA.
												No banks or intermediaries necessary.
											</p>
											<p>
												It’s important to get familiar with basic wallet practices
												for safely storing and transacting with TIA on Celestia.
											</p>
										</div>
									</div>
								</div>
								<div className={"image-box--node col-auto order-0 order-lg-1"}>
									<div className='image-wrapper'>
										<img className='img' style={{ width: `100%`, maxWidth: `470px` }} src={image1} alt={""} />
									</div>
								</div>
							</div>
							<div className={"d-flex flex-column flex-lg-row custody-stacking-item justify-content-between align-items-lg-center"}>
								<div className={"image-box--node col-auto"}>
									<div className='image-wrapper'>
										<img className='img' style={{ width: `100%`, maxWidth: `470px` }} src={image2} alt={""} />
									</div>
								</div>
								<div className={"text-box col-12 col-lg-6"}>
									<h2 className='title'>Stake TIA</h2>
									<div className='custody-text-box'>
										<p>
											Users can stake TIA by delegating to a validator in the active set and receive a share of the validator’s
											staking rewards. Delegations can always be retrieved after a 3-week unbonding period.
										</p>
										<p>
											
											<div className="link-list">
												<div className='link-wrapper me-4'>
													<a className='link' href='https://docs.celestia.org/' target='_blank'>
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
											</div>
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className='wallets'>
						<div className={"container"}>
							<h2 className='wallets-title'>{wallets.title}</h2>
							<p>{wallets.details}</p>
							<div className={"two-col-flex pt-4 pt-lg-5"}>
								{wallets.items.map(function (item) {
									return (
										<div className='wallet-card-wrapper'>
											<div className={`wallet-blurred-image ${item.backdropClass}`}>
												<Image alt={item.title} filename={item.image} />
											</div>
											<div className='wallet-card'>
												<div className='wallet-container'>
													<div className='wallet-image-wrapper'>
														<Image alt={item.title} filename={item.image} />
													</div>
													<div>
														<h3 className='wallet-card-title'>{item.title}</h3>
														<div className='d-flex justify-content-start'>
															{item.device.map(function (item) {
																return (
																	<div className='wallet-device-item d-flex flex-row align-items-center'>
																		<div className='col-auto pe-2'>
																			<svg
																				width={12}
																				height={9}
																				viewBox='0 0 12 9'
																				fill='none'
																				xmlns='http://www.w3.org/2000/svg'
																			>
																				<path d='M1 4L4.5 7.5L11 1' stroke='#52C01E' strokeWidth='1.5' />
																			</svg>
																		</div>
																		<div className='col'>
																			<p className='wallet-card-text'>{item}</p>
																		</div>
																	</div>
																);
															})}
														</div>
													</div>
												</div>
												<div className='link-wrapper'>
													<a className='link' href={item.url} target='_blank'>
														Download
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
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</section>

					<section className={"managing-tia"} id={`${heroData.buttons[0]?.url.replace(/\s+/g, "-").toLowerCase()}`}>
						<div className={"container"}>
							<div className={"row justify-content-between align-items-center"}>
								<div className='col-12 col-lg-6 text-box'>
									<h2 className='title'>Managing TIA as a rollup developer</h2>
									<p>
										Rollup developers need to submit and pay for data in addition to managing their rollup’s TIA balance for
										operation.
									</p>
								</div>
								<div className={"col-12 col-lg-6"}>
									<div className='link-card'>
										<div className='link-title'>Create wallet with celestia-node</div>
										<div className='link-wrapper'>
											<a className='link' href='https://docs.celestia.org/developers/celestia-node-key/' target='_blank'>
												Create wallet
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

export default WhatIsTIA;
