import React, { useState } from "react";
import ReactModal from "react-modal";
import Layout from "../components/layout";
import { Link } from "gatsby";

import "../scss/main.scss";
import AdvantagesSection from "../components/sections/advantages-section";
import ImageSection from "../components/sections/image-section";

import { heroData } from "../datas/home-new/hero-section";
import { advantages } from "../datas/home-new/advantages";
import { purpleData } from "../datas/home-new/purple-section";
import { backers } from "../datas/home-new/backers";
import { roadmaps } from "../datas/home-new/roadmaps";
import { FooterBoxes } from "../datas/home-new/content";
import { exploreCelestia } from "../datas/home-new/explore-celestia";
import { socialChannels } from "../datas/home-new/social-channels";

import Card from "../components/modules/card";
import Button from "../components/buttons/button";
import PurpleSection from "../components/sections/purple-section";
import HeroSection from "../components/sections/hero-section";
import BackersSection from "../components/sections/backers-sections";
import RoadmapItem from "../components/modules/roadmapItem";
import SignUp from "../components/modals/signUp";
import Image from "../components/imageComponent";
import CommunityItem from "../components/modules/community-item";

import { seoContent } from "../datas/home/seoContent";
import SEO from "../components/seo";

const IndexPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalType, setModalType] = useState("");
	const enableBackers = false;

	const handleModalOpen = (event) => {
		setModalType(event.target.id);
		setIsModalOpen(true);
		document.body.style.overflow = "hidden";
	};

	const handleModalClose = (event) => {
		setIsModalOpen(false);
		document.body.style.overflow = "unset";
	};

	return (
		<Layout footerBoxes={FooterBoxes}>
			<SEO title={seoContent.title} description={seoContent.description} ogTitle={seoContent.ogTitle} image={seoContent.image} />
			<div className='index-page-new'>
				<main>
					<HeroSection heroData={heroData} />
					<div className='advantages-section'>
						<div className='container'>
							<h2 className='with-decor'>Advantages</h2>
						</div>
						<AdvantagesSection advantages={advantages} />
					</div>
					<div className='container'>
						<section className='explore-celestia'>
							<div className='d-flex justify-content-center'>
								<h2 className='with-decor pb-2'>Explore Celestia</h2>
							</div>
							<div className='three-col-grid mt-4 mt-lg-5'>
								<div className='card-box'>
									<div className='card-item'>
										<Link to={exploreCelestia[0].link}>
											<svg className='card-link' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 62 63' fill='none'>
												<g clipPath='url(#clip0_334_4082)'>
													<ellipse cx={31} cy='31.2451' rx={31} ry='31.2451' fill='white' />
													<path
														d='M24.2935 38.8448L37.7286 25.4098'
														stroke='#7B2BF9'
														strokeWidth='1.5'
														strokeLinecap='round'
													/>
													<path
														d='M38.1909 36.7061L38.5445 24.3317L26.1701 24.6852'
														stroke='#7B2BF9'
														strokeWidth='1.5'
														strokeLinecap='square'
														strokeLinejoin='bevel'
													/>
												</g>
												<defs>
													<clipPath id='clip0_334_4082'>
														<rect width={62} height='62.4901' fill='white' />
													</clipPath>
												</defs>
											</svg>
										</Link>
										<div className={"image-wrapper"}>
											<Image alt={exploreCelestia[0].title} filename={exploreCelestia[0].image} />
										</div>
										<h3>{exploreCelestia[0].title}</h3>
										<p>{exploreCelestia[0].text} </p>
									</div>
								</div>
								<div className='card-box'>
									<div className='card-item'>
										<Link to={exploreCelestia[0].link}>
											<svg className='card-link' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 62 63' fill='none'>
												<g clipPath='url(#clip0_334_4082)'>
													<ellipse cx={31} cy='31.2451' rx={31} ry='31.2451' fill='white' />
													<path
														d='M24.2935 38.8448L37.7286 25.4098'
														stroke='#7B2BF9'
														strokeWidth='1.5'
														strokeLinecap='round'
													/>
													<path
														d='M38.1909 36.7061L38.5445 24.3317L26.1701 24.6852'
														stroke='#7B2BF9'
														strokeWidth='1.5'
														strokeLinecap='square'
														strokeLinejoin='bevel'
													/>
												</g>
												<defs>
													<clipPath id='clip0_334_4082'>
														<rect width={62} height='62.4901' fill='white' />
													</clipPath>
												</defs>
											</svg>
										</Link>
										<div className={"image-wrapper"}>
											<Image alt={exploreCelestia[1].title} filename={exploreCelestia[1].image} />
										</div>
										<h3>{exploreCelestia[1].title}</h3>
										<p>{exploreCelestia[1].text} </p>
									</div>
								</div>
								<div className='card-box span-full'>
									<div className='card-item'>
										<Link to={exploreCelestia[0].link}>
											<svg className='card-link' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 62 63' fill='none'>
												<g clipPath='url(#clip0_334_4082)'>
													<ellipse cx={31} cy='31.2451' rx={31} ry='31.2451' fill='white' />
													<path
														d='M24.2935 38.8448L37.7286 25.4098'
														stroke='#7B2BF9'
														strokeWidth='1.5'
														strokeLinecap='round'
													/>
													<path
														d='M38.1909 36.7061L38.5445 24.3317L26.1701 24.6852'
														stroke='#7B2BF9'
														strokeWidth='1.5'
														strokeLinecap='square'
														strokeLinejoin='bevel'
													/>
												</g>
												<defs>
													<clipPath id='clip0_334_4082'>
														<rect width={62} height='62.4901' fill='white' />
													</clipPath>
												</defs>
											</svg>
										</Link>
										<div className={"image-wrapper"}>
											<Image alt={exploreCelestia[2].title} filename={exploreCelestia[2].image} />
										</div>
										<div>
											<h3>{exploreCelestia[2].title}</h3>
											<p>{exploreCelestia[2].text} </p>
										</div>
									</div>
								</div>
							</div>
						</section>

						<section className='cards-section'>
							<h2 className='with-decor pb-2'>How it works</h2>
							<div className='subtitle'>
								Celestia is a minimal blockchain that only orders and publishes transactions and does not execute them. By decoupling
								the consensus and application execution layers, Celestia modularizes the blockchain technology stack and unlocks new
								possibilities for decentralized application builders.
							</div>

							<div className='row mt-5'>
								<div className='col col-12 col-lg-6 pe-lg-4'>
									<Card
										image='home/architecture.png'
										title='Traditional monolithic architecture'
										text={
											"<ul><li>Developers can only use programming languages supported by chain's execution environment</li><li>All applications run on the same process (the world computer model), with shared gas resources</li><li>Smart contracts cannot be updated without a hard fork</li></ul>"
										}
									/>
								</div>
								<div className='col col-12 col-lg-6 ps-lg-4'>
									<Card
										image='home/celestia-architecture.png'
										title='Celestia-enabled modular architecture'
										text={
											"<ul><li>Developers can effortlessly define their own virtual execution environments; similar to virtual machines</li><li>Each application gets its own sovereign execution space, while inheriting the security of Celestia's consensus</li><li>Applications can be updated without main chain hard forks</li></ul>"
										}
									/>
								</div>
							</div>
							<div className='row justify-content-center pt-5'>
								<div className='col-auto'>
									<a href='https://celestia.org/learn/' target='_blank'>
										<button className='button button-simple button-internal' role='button' tabIndex={0} id='developer'>
											Learn more
										</button>
									</a>
								</div>
							</div>
						</section>

						<section className='join-the-community'>
							<h2 className='with-decor pb-2'>Join the community</h2>
							<div className='subtitle'>Join the Celestia community online or hang out at one of the grassroots Modular Meetups</div>

							<div className='d-flex'>
								<div className='col-auto'>
									<div className='social-wrapper'>
										<div className='social-box'>
											{socialChannels.items.map(function (item) {
												return <CommunityItem className='icon-card-wrapper col-6 col-md-6' key={item.id} content={item} />;
											})}
										</div>
										<div className='link-container'>
											<a className='link' href={"/"} target={"_blank"} rel={"noreferrer"} aria-label={""}>
												Find More
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
								<div className='col-12 col-lg-6'>
									<div className={"community-image"}>
										<div className='image'>
											<Image alt={""} filename={"modular-summit-2023.jpg"} />
										</div>
										<div className='image-caption'>
											<div className='caption-box'>
												<div className="caption-text">Modular Summit 2023</div>
											</div>
											<div className="logo">
												<Image alt={""} filename={"x-caption-logo.jpg"} />
											</div>
										</div>
									</div>
								</div>
								<div className='col-12 col-lg-6'>
									<div className={"community-image"}>
										<div className='image'>
											<Image alt={""} filename={"modular-meetup.jpg"} />
										</div>
										<div className='image-caption'>
											<div className='caption-box'>
												<div className="caption-text">Modular Summit 2023</div>
											</div>
											<div className="logo">
												<Image alt={""} filename={"x-caption-logo.jpg"} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						<div className='anchor' id='waitlist' />
						<section className='separate-section'>
							<div className='row'>
								<div className='col-12 col-lg-6'>
									<h3 className='with-decor'>Run a node on testnet</h3>
									<div className='text'>Experiment and practice running a node on testnet in preparation for mainnet.</div>
									<a href='https://docs.celestia.org/nodes/overview' target='_blank'>
										<button className='button button-simple' id='operator' role='button' tabIndex={0}>
											Read the Docs
										</button>
									</a>
								</div>
								<div className='col col-12 col-lg-6'>
									<h3 className='with-decor'>Build on our developer beta</h3>
									<div className='text'>Build on Celestia and be the first to explore the benefits of its novel architecture.</div>
									<a href='https://docs.celestia.org/' target='_blank'>
										<button className='button button-simple' id='developer' role='button' tabIndex={0}>
											Build on Testnet
										</button>
									</a>
								</div>
							</div>
						</section>
					</div>
					<ImageSection
						logo={true}
						image='home/celestia-team.png'
						title='Built by industry-leading engineers, researchers and entrepreneurs'
						text={<Button class='external-big' type='internal' url='/team/' text='View the team' />}
					/>
					<PurpleSection enableBackers={enableBackers} anchor='join-our-global-community' purpleData={purpleData} />
					<BackersSection enableBackers={enableBackers} backers={backers} />
				</main>
				<ReactModal isOpen={isModalOpen}>
					<div className='inner'>
						<SignUp modalType={modalType} />
						<button className='close-button' onClick={handleModalClose}>
							<i className='icon-close' aria-label='close' />
						</button>
					</div>
				</ReactModal>
			</div>
		</Layout>
	);
};

export default IndexPage;
