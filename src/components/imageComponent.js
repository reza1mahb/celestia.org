import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Image = (props) => {
	const data = useStaticQuery(graphql`
		query {
			images: allFile {
				edges {
					node {
						relativePath
						name
						childImageSharp {
							gatsbyImageData(layout: CONSTRAINED, width: 800)
						}
						extension
						publicURL
					}
				}
			}
		}
	`);

	// Handles SVG extension
	const extension = props.filename.match(/[^\\]*\.(\w+)$/)[1];

	const image = data.images.edges.find((n) => {
		return n.node.relativePath.includes(props.filename);
	});

	if (!image) {
		return null;
	}

	if (extension === "svg" || extension === "gif") {
		return <img src={image.node.publicURL} alt={props.alt} />;
	}

	const imageData = getImage(image.node.childImageSharp);

	return <GatsbyImage image={imageData} alt={props.alt} />;
};

export default Image;
