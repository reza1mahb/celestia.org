import * as React from "react";
import Backer from "../modules/backer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { content } from "../../datas/home/content";
import Resource from "../modules/resource";
import { resources } from "../../datas/home/resources";
import Button from "../buttons/button";
import { videos } from "../../datas/resources/videos";
import { podcasts } from "../../datas/resources/podcasts";
import { whitepapers } from "../../datas/resources/whitepapers";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 6,
		slidesToSlide: 3,
	},
	laptop: {
		breakpoint: { max: 1440, min: 640 },
		items: 5,
		slidesToSlide: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 3,
		slidesToSlide: 3,
	},
	mobile: {
		breakpoint: { max: 640, min: 0 },
		items: 1,
		slidesToSlide: 1,
	},
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
	return (
		<div className='carousel-button-group'>
			<button className={"button button button-left"} onClick={() => previous()}>
				<i className={"icon-carousel-left"} />
			</button>
			<button className={"button button button-right"} onClick={() => next()}>
				<i className={"icon-carousel-right"} />
			</button>
		</div>
	);
};

export default class BackersSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	}
	async getPosts() {
		try {
			let response = await fetch(
				"https://blog.celestia.org/ghost/api/v3/content/posts/?key=000cf34311006e070b17fffcfd&limit=5&fields=title,text,feature_image,url"
			);
			let responseJson = await response.json();

			const blogPosts = [];
			for (const [key, value] of Object.entries(responseJson.posts)) {
				blogPosts.push({ category: "blog", title: value.title, text: value.text, image: value.feature_image, url: value.url });
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
		const self = this;
		return (
			<section id={this.props.id} className={this.props.enableBackers ? "backers-section" : "backers-section without-backers"}>
				{this.props.enableBackers && (
					<div className={"container"}>
						<h2 className={"with-decor mb-4"}>{content.backersSection.title}</h2>
						<div className={"subtitle mb-5"}>{content.backersSection.subtitle}</div>

						<div className={"carousel-inner"}>
							<Carousel
								className={"py-0"}
								responsive={responsive}
								swipable={true}
								draggable={false}
								infinite={true}
								autoPlay={false}
								containerClass={"multi-carousel"}
								customTransition={"1000ms all cubic-bezier(0.65, 0, 0.35, 1)"}
								arrows={false}
								renderButtonGroupOutside={true}
								customButtonGroup={<ButtonGroup />}
							>
								{self.props.backers &&
									self.props.backers.map(function (backer, index) {
										if (index % 2 === 0) {
											const next = index + 1;
											if (next < self.props.backers.length) {
												return (
													<div>
														<Backer key={index} data={backer} />
														<Backer key={next} data={self.props.backers[next]} />
													</div>
												);
											} else {
												if (index <= self.props.backers.length) {
													return (
														<div>
															<Backer key={index} data={backer} />
														</div>
													);
												}
											}
										}
									})}
								{self.props.backers &&
									self.props.backers.map(function (backer, index) {
										if (index % 2 === 0) {
											const next = index + 1;
											if (next < self.props.backers.length) {
												return (
													<div>
														<Backer key={index} data={backer} />
														<Backer key={next} data={self.props.backers[next]} />
													</div>
												);
											} else {
												if (index <= self.props.backers.length) {
													return (
														<div>
															<Backer key={index} data={backer} />
														</div>
													);
												}
											}
										}
									})}
							</Carousel>
						</div>
					</div>
				)}

				<div className={"container"}>
					<h2 className={"with-decor black"}>Blog</h2>

					<div className={"row"}>
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

					<div className={"row justify-content-end"}>
						<div className={"col-auto"}>
							<Button type={"external"} class={"external"} text={"View blog"} url={"https://blog.celestia.org"} />
						</div>
					</div>
				</div>
			</section>
		);
	}
}
