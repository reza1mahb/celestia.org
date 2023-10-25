import * as React from "react";

import { heroData } from "../datas/developer-portal/hero-data";
import { getStarted } from "../datas/developer-portal/get-started";
import { frameworks } from "../datas/developer-portal/frameworks";
import { connect } from "../datas/developer-portal/connect";
import { concepts } from "../datas/developer-portal/concepts";
import { discover } from "../datas/developer-portal/discover";
import { faqs } from "../datas/developer-portal/faq";
import { community } from "../datas/developer-portal/community";
import { FooterBoxes } from "../datas/developer-portal/content";
import Layout from "../components/layout";
import IconCard from "../components/modules/icon-card";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Faq from "../components/modules/faq";

import { seoContent } from "../datas/developer-portal/seoContent";
import SEO from "../components/seo";

const DevPortal = () => {
	return (
		<Layout footerBoxes={FooterBoxes}>
			<SEO
				title={seoContent.title}
				description={seoContent.description}
                ogTitle={seoContent.ogTitle}
				image={seoContent.image}
			/>
			<div className={"developer-portal"}>
				<main>
					<section className='hero'>
						<div className={"container"}>
							<h1 className={"main mb-3 mb-md-4"}>{heroData.title}</h1>
							<div className={"row"}>
								<div className={"col-auto"}>
									<div className={"text"} dangerouslySetInnerHTML={{ __html: heroData.text }} />
									<AnchorLink to={`/developer-portal#${heroData.buttons[0].url}`} className={'plausible-event-name=Build_Modular_Button--Developer_Portal_Page-Hero_section button button-'+heroData.buttons[0].class} stripHash>{heroData.buttons[0].text}</AnchorLink>
									<a href={`${heroData.buttons[1].url}`} className={'button button-'+heroData.buttons[1].class} target={"_blank"} rel={"noreferrer"}>{heroData.buttons[1].text}</a>
								</div>
							</div>
						</div>
					</section>

					<section className='get-started'>
						<div className={"container"}>
							<h2 className={"with-decor"}>{getStarted.title}</h2>
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

					<section className='frameworks' id={`${getStarted.items[0].title.replace(/\s+/g, "-").toLowerCase()}`}>
						<div className={"container"}>
							<h2 className={"with-decor"}>{frameworks.title}</h2>
							{frameworks.description && <div className={"description"}>{frameworks.description}</div>}
							<div className={"row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-3 gy-5 gy-md-3 my-2 pt-0 pt-md-4 pb-3"}>
								{frameworks.items.map(function (item) {
									return (
										<IconCard
											className='icon-card-wrapper col'
											key={item.id}
											content={item}
											variant={"vertical"}
											btnClass={'plausible-event-name=Framework_Click--Developer_Portal_Page-Framework_section'}
										/>
									);
								})}
							</div>
						</div>
					</section>

					<section className='connect' id={`${getStarted.items[1].title.replace(/\s+/g, "-").toLowerCase()}`}>
						<div className={"connect-container"}>
							<div className={"row align-items-center justify-content-between my-2 py-2 py-md-5"}>
								<div className='col-12 col-xl-4 mb-5 mb-md-0'>
									<h2 className={"with-decor"}>{connect.title}</h2>
									{connect.description && <div className={"description"}>{connect.description}</div>}
								</div>
								<div className='col-12 col-xl-7'>
									<div className='gx-3 gy-5 row'>
										{connect.items.map(function (item) {
											return (
												<IconCard
													className='col-12 icon-card-wrapper'
													imageClass={"square"}
													key={item.id}
													content={item}
													variant={"horizontal"}
													btnClass={'plausible-event-name=Node_API--Developer_Portal_Page-Connect_section'}
												/>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className='concepts' id={`${getStarted.items[2].title.replace(/\s+/g, "-").toLowerCase()}`}>
						<div className={"container"}>
							<div className={"row flex-wrap-reverse flex-xl-wrap align-items-center justify-content-between my-2 pt-2 pt-lg-5 pb-3"}>
								<div className='col-12 col-xl-8'>
									<div className='gx-3 gy-5 row'>
										{concepts.items.map(function (item) {
											return (
												<IconCard
													className='icon-card-wrapper col-12 col-md-6'
													key={item.id}
													content={item}
													variant={"vertical"}
												/>
											);
										})}
									</div>
								</div>
								<div className='col-12 col-xl-4 mb-5 mb-md-0'>
									<h2 className={"with-decor"}>{concepts.title}</h2>
									{concepts.description && <div className={"description"}>{concepts.description}</div>}
								</div>
							</div>
						</div>
					</section>

					<section className='discover'>
						<div className={"container"}>
							<h2 className={"with-decor"}>{discover.title}</h2>
							{discover.description && <div className={"description"}>{discover.description}</div>}
							<div className={"row gx-3 gy-3 pt-4 pb-3"}>
								{discover.items.map(function (item) {
									return (
										<IconCard
											className='icon-card-wrapper col-12 col-md min-width-33'
											key={item.id}
											content={item}
											variant={"no-image"}
										/>
									);
								})}
							</div>
						</div>
					</section>

					<section className='faqs'>
						<div className={"container"}>
							<div className={"row justify-content-between my-2 pt-2 pt-lg-5 pb-3"}>
								<div className='col-12 col-xl-4 mb-5'>
									<h2 className={"with-decor"}>{faqs.title}</h2>
									{faqs.description && <div className={"description"}>{faqs.description}</div>}
								</div>
								<div className={"col-12 col-xl-7 faq-content mb-5"}>
									{faqs.items.map((faq) => (
										<div className={"col col-12"} key={faq.id}>
											<Faq faq={faq} />
										</div>
									))}
									<div className={"clear"} />
								</div>
							</div>
						</div>
					</section>

					<section className='community'>
						<div className={"container"}>
							<h2 className={"with-decor community-title"}>{community.title}</h2>
							{community.description && <div className={"description community-description"}>{community.description}</div>}
							<div className={"row gx-3 gy-3 my-2 pt-4 pb-3"}>
								{community.items.map(function (item) {
									return (
										<IconCard
											className='icon-card-wrapper col-12 col-md min-width-50'
											key={item.id}
											content={item}
											variant={"horizontal"}
											iconPosition={"top"}
										/>
									);
								})}
							</div>
						</div>
					</section>
				</main>
			</div>
		</Layout>
	);
};

export default DevPortal;
