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
						<div className={"text mb-3 mb-md-5"}>
							A complete beginner's guide to how Celestia works, its key benefits and how anyone in the world will be able to create
							their own blockchain in minutes.
						</div>
						<div className={"row card"}>
							<div className={"col-6"}>text</div>
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
