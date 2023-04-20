import * as React from "react";

import { heroData } from "../datas/developer-portal/hero-data";
import { getStarted } from "../datas/developer-portal/get-started";
import { tutorials } from "../datas/developer-portal/tutorials";
import { connect } from "../datas/developer-portal/connect";
import { concepts } from "../datas/developer-portal/concepts";
import { faqs } from "../datas/developer-portal/faq";
import { community } from "../datas/developer-portal/community";
import { FooterBoxes } from "../datas/developer-portal/content";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";
import IconCard from "../components/modules/icon-card";
import Button from "../components/buttons/button";
import Faq from "../components/modules/faq";

const DevPortal = () => {
	return (
		<Layout footerBoxes={FooterBoxes}>
			<Helmet>
				<title>Celestia - Developer Portal</title>
			</Helmet>
			<div className={"developer-portal"}>
				<main>
					<div className={"container"}>
						<h1 className={"main mb-3 mb-md-4"}>{heroData.title}</h1>
						<div className={"row"}>
							<div className={"col-auto"}>
								<div className={"subtitle"} dangerouslySetInnerHTML={{ __html: heroData.text }} />
								{heroData.buttons.map((button, index) => (
									<Button key={index} class={button.class} type={button.type} text={button.text} url={button.url} />
								))}
							</div>
						</div>

						<section className='get-started'>
							<h2 className={"with-decor"}>{getStarted.title}</h2>
							{getStarted.description && <div className={"description"}>{getStarted.description}</div>}
							<div className={"row gx-3 gy-3 row-cols-1 row-cols-lg-3 pt-4 pb-3"}>
								{getStarted.items.map(function (item) {
									return <IconCard key={item.id} content={item} flexDirection={"vertical"} />;
								})}
							</div>
						</section>

						<section className='tutorials'>
							<h2 className={"with-decor"}>{tutorials.title}</h2>
							{tutorials.description && <div className={"description"}>{tutorials.description}</div>}
							<div className={"row gx-3 gy-3 row-cols-1 row-cols-lg-3 my-2 pt-4 pb-3"}>
								{tutorials.items.map(function (item) {
									return <IconCard key={item.id} content={item} flexDirection={"vertical"} />;
								})}
							</div>
						</section>

						<section className='connect'>
							<div className={"row justify-content-between my-2 pt-2 pt-lg-5 pb-3"}>
								<div className='col-12 col-xl-4 mb-5'>
									<h2 className={"with-decor"}>{connect.title}</h2>
									{connect.description && <div className={"description"}>{connect.description}</div>}
								</div>
								<div className='col-12 col-xl-7'>
									<div className='gx-3 gy-3 row'>
										{connect.items.map(function (item) {
											return <IconCard key={item.id} content={item} flexDirection={"horizontal"} />;
										})}
									</div>
								</div>
							</div>
						</section>

						<section className='concepts'>
							<div className={"row flex-wrap-reverse flex-xl-wrap justify-content-between my-2 pt-2 pt-lg-5 pb-3"}>
								<div className='col-12 col-xl-7'>
									<div className='gx-3 gy-3 row row-cols-1 row-cols-lg-2'>
										{concepts.items.map(function (item) {
											return <IconCard key={item.id} content={item} flexDirection={"horizontal"} />;
										})}
									</div>
								</div>
								<div className='col-12 col-xl-4 mb-5'>
									<h2 className={"with-decor"}>{concepts.title}</h2>
									{concepts.description && <div className={"description"}>{concepts.description}</div>}
								</div>
							</div>
						</section>

						<section className='faqs'>
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
						</section>

						<section className='community'>
							<h2 className={"with-decor community-title"}>{community.title}</h2>
							{community.description && <div className={"description community-description"}>{community.description}</div>}
							<div className={"row gx-3 gy-3 row-cols-1 row-cols-lg-2 my-2 pt-4 pb-3"}>
								{community.items.map(function (item) {
									return <IconCard key={item.id} content={item} flexDirection={"horizontal"} iconPosition={'top'} />;
								})}
							</div>
						</section>
					</div>
				</main>
			</div>
		</Layout>
	);
};

export default DevPortal;
