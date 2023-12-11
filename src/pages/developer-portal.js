import * as React from "react";

import { heroData } from "../datas/developer-portal/hero-data";
import { getStarted } from "../datas/developer-portal/get-started";
import { frameworks } from "../datas/developer-portal/frameworks";
import { rollups } from "../datas/developer-portal/rollups";
import { connect } from "../datas/developer-portal/connect";
import { discover } from "../datas/developer-portal/discover";
import { community } from "../datas/developer-portal/community";
import { FooterBoxes } from "../datas/developer-portal/content";
import Layout from "../components/layout";
import IconCard from "../components/modules/icon-card";

import { seoContent } from "../datas/developer-portal/seoContent";
import Seo from "../components/seo";
import FrameworkTabs from "../components/framework-tabs";
import ContactSection from "../components/sections/contact-section";
import IntegrateSection from "../components/sections/integrate-section";

const DevPortal = () => {
	return (
		<Layout footerBoxes={FooterBoxes}>
			<Seo title={seoContent.title} description={seoContent.description} ogTitle={seoContent.ogTitle} image={seoContent.image} />
			<div className={"developer-portal"}>
				<main>
					<section className='hero'>
						<div className={"container"}>
							<div className={"row justify-content-center"}>
								<div className={"col-auto"}>
									<h1 className={"text-center"}>{heroData.title}</h1>
								</div>
							</div>
						</div>
					</section>

					<section className='get-started pt-3'>
						<div className={"container"}>
							{getStarted.description && <div className={"description"}>{getStarted.description}</div>}
							<div className={"row gx-3 gy-3 pt-4 pb-3"}>
								{getStarted.items.map(function (item) {
									return (
										<IconCard
											className='icon-card-wrapper col-12 col-md min-width-33'
											key={item.id}
											content={item}
											variant={"vertical anchor no-image"}
										/>
									);
								})}
							</div>
						</div>
					</section>

					<FrameworkTabs content={getStarted} categories={frameworks} anchorId={0} />

					<section className='discover pt-5'>
						<div className={"container"}>
							<h2 className={"text-center"}>{discover.title}</h2>
							{discover.description && <div className={"description"}>{discover.description}</div>}
							<div className={"row gx-3 gy-3 pt-4 mt-4"}>
								{discover.items.map(function (item) {
									return (
										<IconCard
											className='icon-card-wrapper col-12 col-md min-width-33'
											key={item.id}
											content={item}
											variant={"vertical no-image"}
										/>
									);
								})}
							</div>
						</div>
					</section>

					<IntegrateSection content={getStarted} anchorId={2} />

					<FrameworkTabs content={getStarted} categories={rollups} anchorId={1} />

					<ContactSection />
				</main>
			</div>
		</Layout>
	);
};

export default DevPortal;
