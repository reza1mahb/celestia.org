import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

function SEO({ description, lang, meta, title, image, ogTitle }) {
	const { site } = useStaticQuery(graphql`
		query DefaultSEOQuery {
			site {
				siteMetadata {
					title
					description
					author
					image
                    siteUrl
				}
			}
		}
	`);

	const metaTitle = title || site.siteMetadata.title;
	const metaOgTitle = ogTitle || site.siteMetadata.title;
	const metaDescription = description || site.siteMetadata.description;
	const metaImage = image ? site.siteMetadata.siteUrl + image : site.siteMetadata.siteUrl + site.siteMetadata.image;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: metaOgTitle,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:image`,
					content: metaImage,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary_large_image`,
				},
				{
					name: `twitter:title`,
					content: metaOgTitle,
				},
				{
					name: `twitter:site`,
					content: site.siteMetadata.author,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			]
			.concat(meta)}
			title={metaTitle}
		/>
	);
}

SEO.defaultProps = {
	lang: `en`,
	keywords: [],
	meta: [],
};

SEO.propTypes = {
    description: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    lang: PropTypes.string,
    meta: PropTypes.array,
    title: PropTypes.string.isRequired,
	ogTitle: PropTypes.string,
    image: PropTypes.string,
};

export default SEO;
