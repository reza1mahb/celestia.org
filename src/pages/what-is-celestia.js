import * as React from "react";
import Layout from "../components/layout";
import { FooterBoxes } from "../datas/technology/content";
import { Helmet } from "react-helmet";
// import { StaticImage } from "gatsby-plugin-image";

const WhatIsCelestia = () => {
	return (
		<Layout footerBoxes={FooterBoxes}>
			<Helmet>
				<title>Celestia - What is Celestia?</title>
			</Helmet>
			<div className={"what-is-celestia"}>
				<main>
					<div className={"container"}>
						<h1 className={"mb-3 mb-md-5"}>What is Celestia</h1>
						<p className={"lead-text"}>
							A complete beginner's guide to how Celestia works, its key benefits and how anyone in the world will be able to create
							their own blockchain in minutes.
						</p>

						<section className={"card-section"}>
							<div className={"row justify-content-between"}>
								<div className={"order-2 order-lg-1 text-box col-12 col-lg-6"}>
									<p>
										Celestia is a new technology that powers, scales and secures Web3 applications. To achieve this, Celestia
										introduces a new modular blockchain architecture that solves the core scaling problems of today’s blockchains.
									</p>
									<div className='subtitle'>Confused?</div>
									<p>Let’s walk through the basics, step-by-step.</p>
								</div>
								<div className={"image-box--cover order-1 order-lg-2 col-12 col-lg-6"}></div>
							</div>
						</section>

						<section className={"modular-blockchain-section"}>
							<div className={"row justify-content-between"}>
								<div className={"text-box col-12 col-lg-6"}>
									<div className='title'>But what’s a modular blockchain?</div>
									<p>
										Modular blockchains are a new paradigm in blockchain design. Instead of one blockchain doing everything,
										modular blockchains specialize and optimize to perform a given function. This specialization provides
										breakthroughs in scalability, flexibility, and interoperability, enabling developers to build blockchain
										applications for mass adoption.
									</p>
								</div>
								<div className={"image-box--modular col-12 col-lg-6"} />
							</div>
						</section>

						<section className={"how-different-section"}>
							<div className={"row justify-content-between align-items-center"}>
								<div className={"order-2 order-lg-1 image-box--different col-12 col-lg-6"} />
								<div className={"order-1 order-lg-2 text-box col-12 col-lg-6"}>
									<div className='title'>How is Celestia different from Bitcoin and Ethereum?</div>
									<p>
										<strong>If Bitcoin is a calculator and Ethereum is a computer, then Celestia is a cloud computer.</strong>
									</p>
									<p>
										Bitcoin showed that it was possible to build a decentralized application but was very limited in what it could
										be used to build. Ethereum showed that it was possible to build a programmable blockchain that anyone could
										use to launch a decentralized application. Celestia will show that it is possible to build a network that
										could enable anyone to launch their own blockchain.
									</p>
								</div>
							</div>
						</section>
					</div>
				</main>
			</div>
		</Layout>
	);
};

export default WhatIsCelestia;
