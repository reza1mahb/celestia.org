import * as React from "react";

import { heroData } from "../datas/community/hero-data";
import { socialChannels } from "../datas/community/social-channels";
import { explore } from "../datas/community/explore";
import { ecosystem } from "../datas/community/ecosystem";
import { FooterBoxes } from "../datas/community/content";
import Layout from "../components/layout";
import CommunityItem from "../components/modules/community-item";
import Button from "../components/buttons/button";
import Image from "../components/imageComponent";
import SEO from "../components/seo";

const Community = () => {
	return (
		<Layout footerBoxes={FooterBoxes}>
			<SEO
				title='Celestia - Community'
				description='Discover community hubs, discussion forums, and resources that are used by the global Celestia community.'
				// image='/ecosystem-page.jpg'
			/>
			<div className={"community-page"}>
				<main>
					<section className='hero'>
						<div className={"container"}>
							<h1 className={"main mb-3 mb-md-4"}>{heroData.title}</h1>
							<div className={"row"}>
								<div className={"col-auto"}>
									<div className={"subtitle"} dangerouslySetInnerHTML={{ __html: heroData.text }} />
									{/* {heroData.buttons.map((button, index) => (
										<Button key={index} class={button.class} type={button.type} text={button.text} url={button.url} />
									))} */}
								</div>
							</div>
						</div>
					</section>

					<section className='social-channels'>
						<div className={"container"}>
							<div className={"row flex-wrap align-items-center justify-content-between gx-5"}>
								<div className='col-12 col-lg-6 col-xl-4 mb-5 mb-lg-0'>
									<h2 className={"title with-decor"}>{socialChannels.title}</h2>
									{socialChannels.description && <div className={"description"}>{socialChannels.description}</div>}
								</div>
								<div className='col-12 col-lg-6 col-xl-6'>
									<div className='gx-3 gy-4 gy-md-3 row'>
										{socialChannels.items.map(function (item) {
											return <CommunityItem className='icon-card-wrapper col-6 col-md-6' key={item.id} content={item} />;
										})}
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className='explore'>
						<div className={"container"}>
							<div className={"row flex-wrap-reverse flex-lg-wrap align-items-center justify-content-between gx-5"}>
								<div className='col-12 col-lg-6 col-xl-6'>
									<div className='gx-3 gy-4 gy-md-3 row'>
										{explore.items.map(function (item) {
											return <CommunityItem className='icon-card-wrapper col-6 col-md-6' key={item.id} content={item} />;
										})}
									</div>
								</div>
								<div className='col-12 col-lg-6 col-xl-4 mb-5 mb-lg-0'>
									<h2 className={"title with-decor"}>{explore.title}</h2>
									{explore.description && <div className={"description"}>{explore.description}</div>}
								</div>
							</div>
						</div>
					</section>

					<section className={"ecosystem"}>
						<div className={"container"}>
							<div className={"row justify-content-between align-items-center gx-5 gy-3"}>
								<div className={"col-12 col-lg-6 col-xl-5 mb-4 mb-lg-0"}>
									<div className='image-wrapper'>
										<Image style={{ width: `100%` }} alt={ecosystem.title} filename={ecosystem.image} />
									</div>
								</div>
								<div className={"col-12 col-lg-6 col-xl-6 "}>
									<h2 className='title'>{ecosystem.title}</h2>
									<p className='text'>{ecosystem.text}</p>
									<Button
										class={ecosystem.button.class}
										type={ecosystem.button.type}
										text={ecosystem.button.text}
										url={ecosystem.button.url}
									/>
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
		</Layout>
	);
};

export default Community;
