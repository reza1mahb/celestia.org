import * as React from "react";
import "react-multi-carousel/lib/styles.css";

import { FooterBoxes } from "../datas/resources/content";
import { resources } from "../datas/resources/resources";

import PodcastSection from "../components/sections/podcast-section";
import WhitepapersSection from "../components/sections/whitepapers-section";
import Resource from "../components/modules/resource";
import Button from "../components/buttons/button";
import VideosSection from "../components/sections/videos-section";
import AnchorMenu from "../components/modules/anchorMenu";
import { anchors } from "../datas/resources/content";
import { blogs } from "../datas/resources/blogs";
import { videos } from "../datas/resources/videos";
import { whitepapers } from "../datas/resources/whitepapers";
import { podcasts } from "../datas/resources/podcasts";
import { communityposts } from "../datas/resources/community-posts";
import Carousel from "react-multi-carousel";
import Layout from "../components/layout";
import { content } from "../datas/technology/content";

import { seoContent } from "../datas/resources/seoContent";
import SEO from "../components/seo";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 3,
		partialVisibilityGutter: 140,
	},
	laptop: {
		breakpoint: { max: 1340, min: 600 },
		items: 2,
		slidesToSlide: 2,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 2,
	},
	mobile: {
		breakpoint: { max: 920, min: 0 },
		items: 1,
		slidesToSlide: 1,
	},
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
	return (
		<div className='carousel-button-group'>
			<button
				className={rest.carouselState.currentSlide === 0 ? "button button button-left disable" : "button button button-left"}
				onClick={() => previous()}
			>
				<i className={"icon-carousel-left"} aria-label={"prev"} />
			</button>
			<button
				className={
					rest.carouselState.currentSlide + rest.carouselState.slidesToShow === rest.carouselState.totalItems
						? "button button button-right disable"
						: "button button button-right"
				}
				onClick={() => next()}
			>
				<i className={"icon-carousel-right"} aria-label={"next"} />
			</button>
		</div>
	);
};

class ResourcesPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	}

	async getPosts() {
		try {
			let response = await fetch(
				"https://blog.celestia.org/ghost/api/v3/content/posts/?key=000cf34311006e070b17fffcfd&limit=10&fields=title,text,feature_image,url"
			);
			let responseJson = await response.json();

			const blogPosts = [];
			for (const [key, value] of Object.entries(responseJson.posts)) {
				blogPosts.push({ key: key, category: "blog", title: value.title, text: value.text, image: value.feature_image, url: value.url });
			}

			this.setState({ posts: blogPosts });
		} catch (error) {
			console.error(error);
		}
	}

	getContent(id) {
		var content = "";
		switch (resources[id].category) {
			case "blog":
				content = this.state.posts[resources[id].id];
				break;
			case "video":
				content = videos[resources[id].id];
				break;
			case "podcast":
				content = podcasts[resources[id].id];
				break;
			case "whitepaper":
				content = whitepapers[resources[id].id];
				break;
			default:
				content = resources[id];
				break;
		}
		return content;
	}

	componentDidMount() {
		this.getPosts();
	}
	render() {
		return (
			<Layout footerBoxes={FooterBoxes}>
				<SEO
					title={seoContent.title}
					description={seoContent.description}
					image={seoContent.image}
				/>
				<div className={"resources-page"}>
					<main>
						<div className={"container"}>
							<h1 className={"main"}>Resources</h1>

							<div className={"float-end"}>
								<AnchorMenu anchors={anchors} />
							</div>
							<div className={"clear"} />

							<div className={"row py-lg-5"}>
								<div className={"col col-12 col-lg-7 pe-xl-5 pt-5"}>
									<Resource type={"big"} data={this.getContent(0)} />
								</div>
								<div className={"col col-12 col-lg-5 ps-3 ps-xl-3 pt-5 mt-n4"}>
									<div className={"row"}>
										<div className={"col-12 col-md-6 col-lg-12"}>
											<Resource type={"text"} data={this.getContent(1)} />
										</div>
										<div className={"col-12 col-md-6 col-lg-12"}>
											<Resource type={"text"} data={this.getContent(2)} />
										</div>
										<div className={"col-12 col-md-6 col-lg-12"}>
											<Resource type={"text"} data={this.getContent(3)} />
										</div>
										<div className={"col-12 col-md-6 col-lg-12"}>
											<Resource type={"text"} class={"no-border"} data={this.getContent(4)} />
										</div>
									</div>
								</div>
							</div>

							<div className={"row py-md-5 oneLine"}>
								<div className={"col col-12 col-sm-6 col-lg-3 pb-5 pb-lg-0"}>
									<Resource type={"small"} data={this.getContent(5)} />
								</div>
								<div className={"col col-12 col-sm-6 col-lg-3 pb-5 pb-lg-0"}>
									<Resource type={"small"} data={this.getContent(6)} />
								</div>
								<div className={"col col-12 col-sm-6 col-lg-3 pb-5 pb-lg-0"}>
									<Resource type={"small"} data={this.getContent(7)} />
								</div>
								<div className={"col col-12 col-sm-6 col-lg-3 pb-5 pb-lg-0"}>
									<Resource type={"small"} data={this.getContent(8)} />
								</div>
							</div>

							<div className={"row my-5 blog-section"}>
								<h2 className={"with-decor mb-5"}>Blog</h2>
								<div className={"section-inner"}>
									<Carousel
										responsive={responsive}
										swipable={true}
										draggable={true}
										infinite={false}
										containerClass={"multi-carousel"}
										customTransition={"1000ms all cubic-bezier(0.65, 0, 0.35, 1)"}
										arrows={false}
										renderButtonGroupOutside={true}
										customButtonGroup={<ButtonGroup />}
									>
										{blogs.map((article, index) => (
											<Resource
												key={index}
												type={"small"}
												data={article.category === "blog" ? this.state.posts[article.id] : article}
											/>
										))}
									</Carousel>
								</div>
							</div>

							<div className={"row justify-content-end mb-5"}>
								<div className={"col-auto"}>
									<Button type={"external"} class={"external"} url={"http://blog.celestia.org"} text={"List all blog posts"} />
								</div>
							</div>

							<div className={"manualAnchor"} id={anchors[0].anchor} />
							<VideosSection id={"videos"} />
							<div className={"manualAnchor"} id={anchors[1].anchor} />
							<PodcastSection id={"podcasts"} />
							<div className={"manualAnchor"} id={anchors[2].anchor} />
							<WhitepapersSection id={"whitepapers"} />

							<div className={"row my-5 blog-section"}>
								<h2 className={"with-decor mb-5"}>Community Posts</h2>
								<div className={"section-inner"}>
									<Carousel
										responsive={responsive}
										swipable={true}
										draggable={true}
										infinite={false}
										containerClass={"multi-carousel"}
										customTransition={"1000ms all cubic-bezier(0.65, 0, 0.35, 1)"}
										arrows={false}
										renderButtonGroupOutside={true}
										customButtonGroup={<ButtonGroup />}
									>
										{communityposts.map((post, index) => (
											<Resource key={index} type={"small"} data={post} />
										))}
									</Carousel>
								</div>
							</div>
						</div>
					</main>
				</div>
			</Layout>
		);
	}
}

export default ResourcesPage;
