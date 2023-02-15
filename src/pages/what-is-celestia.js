import * as React from "react";
import Layout from "../components/layout";
import { FooterBoxes } from "../datas/technology/content";
import { Helmet } from "react-helmet";

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
						<div className={"card row justify-content-start"}>
							<div className={"text-box col col-md-6"}>
								<p>
									Celestia is a new technology that powers, scales and secures Web3 applications. To achieve this, Celestia
									introduces a new modular blockchain architecture that solves the core scaling problems of today’s blockchains.
								</p>
								<div className='title'>Confused?</div>
								<p>Let’s walk through the basics, step-by-step.</p>
							</div>
							<div className="imagebox"></div>
						</div>
						<section className={"column-section"}>
							<h4 className={"main"}>Section Title</h4>
							<div className={"subtitle"}>Section Subtitle</div>
							<div className={"row mt-5 border border-danger"}>Row</div>
						</section>
					</div>
				</main>
			</div>
		</Layout>
	);
};

export default WhatIsCelestia;
