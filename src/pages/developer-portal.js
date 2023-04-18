import * as React from "react";

import { heroData } from "../datas/developer-portal/hero-data";
import { getStarted } from "../datas/developer-portal/get-started";
import { tutorials } from "../datas/developer-portal/tutorials";
import { connect } from "../datas/developer-portal/connect";
import { FooterBoxes } from "../datas/ecosystem-page/content";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";
import IconCard from "../components/modules/icon-card";
import Button from "../components/buttons/button";

const EcosystemPage = () => {
	return (
		<Layout footerBoxes={FooterBoxes}>
			<Helmet>
				<title>Celestia - Ecosystem</title>
			</Helmet>
			<div className={"developer-portal"}>
				<main>
					<div className={"container"}>
						<h1 className={"main mb-3 mb-md-5"}>{heroData.title}</h1>
						<div className={"row"}>
							<div className={"col-auto"}>
								<div className={"subtitle"} dangerouslySetInnerHTML={{ __html: heroData.text }} />
								{heroData.buttons.map((button, index) => (
									<Button key={index} class={button.class} type={button.type} text={button.text} url={button.url} />
								))}
							</div>
						</div>

						<section className='get-started'>
							<h2 className={"with-decor"}>Get started</h2>
							<div className={"row gx-3 gy-3 gy-lg-0 gx-sm-3 row-cols-1 row-cols-lg-3 pt-2 pt-lg-5 pb-3"}>
								{getStarted.map(function (item) {
									return <IconCard key={item.id} content={item} flexDirection={"vertical"} />;
								})}
							</div>
						</section>

						<section>
							<div className={"row gx-3 gy-3 gy-lg-0 gx-sm-3 row-cols-1 row-cols-lg-3 my-2 pt-2 my-lg-5 pt-lg-5 pb-3"}>
								{tutorials.map(function (item) {
									return <IconCard key={item.id} content={item} flexDirection={"vertical"} />;
								})}
							</div>
						</section>

						<section>
							<div className={"row gx-3 gy-3 gy-lg-0 gx-sm-3 row-cols-1 row-cols-lg-2 my-2 pt-2 my-lg-5 pt-lg-5 pb-3"}>
								{connect.map(function (item) {
									return <IconCard key={item.id} content={item} flexDirection={"horizontal"} />;
								})}
							</div>
						</section>
					</div>
				</main>
			</div>
		</Layout>
	);
};

export default EcosystemPage;
