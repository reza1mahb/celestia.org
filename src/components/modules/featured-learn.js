import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import LearnBox from "../../components/learn-box";

export default function FeaturedLearn(props) {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(sort: { frontmatter: { order: ASC } }, filter: { fileAbsolutePath: { regex: "/learn/" } }) {
				edges {
					node {
						id
						frontmatter {
							date(formatString: "MMMM DD, YYYY")
							slug
							icon
							title
							order
							description
						}
					}
				}
			}
		}
	`);

	return (
		<div className={"learning-modules"}>
			{data.allMarkdownRemark.edges.map((edge, index) => {
				if (edge.node.frontmatter.slug === props.current) {
					const prev = index === 0 ? data.allMarkdownRemark.edges.length - 1 : index - 1;
					const next = index === data.allMarkdownRemark.edges.length - 1 ? 0 : index + 1;

					return (
						<div className={"row pb-md-5 learn-modules learn-modules-footer smaller"}>
							<div className={`col col-12 col-md-6 pt-5 prev order-2 order-md-1 ${next === 0 ? "border-0" : ""}`}>
								<LearnBox
									type={"prev"}
									withArrow={props.withArrow}
									key={data.allMarkdownRemark.edges[prev].node.id}
									post={data.allMarkdownRemark.edges[prev].node}
								/>
							</div>
							{next !== 0 && (
								<div className={"col col-12 col-md-6 pt-5 next order-1 order-md-2"}>
									<LearnBox
										type={"next"}
										withArrow={props.withArrow}
										key={data.allMarkdownRemark.edges[next].node.id}
										post={data.allMarkdownRemark.edges[next].node}
									/>
								</div>
							)}
						</div>
					);
				}
			})}
		</div>
	);
}
