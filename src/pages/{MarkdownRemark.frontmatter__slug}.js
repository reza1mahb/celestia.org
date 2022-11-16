import React from "react"
import {graphql, Link} from "gatsby"
import Sticky from 'react-sticky-el';
import Image from "../components/imageComponent";

import {FooterBoxes} from "../datas/resources/content";
import Layout from "../components/layout";
import FeaturedLearn from "../components/modules/featured-learn";
import TocGroup from "../components/modules/toc-groups";


export default function Template({
         data, props // this prop will be injected by the GraphQL query below.
     }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data

    const { frontmatter, html, headings } = markdownRemark

    return (

        <Layout footerBoxes={FooterBoxes}>
        <div className="resources-page">

            <main>
                <div className={'container'}>
                    <div className="blog-post" id={'blog-post'}>
                        <div className={'inner small'}>
                            <h1 className={'h2'}>{frontmatter.title}</h1>

                            {!frontmatter.path.includes("resources") &&
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <Link to={frontmatter.path}>
                                        <li className="breadcrumb-item ps-0 pb-0 mb-0">{frontmatter.path.includes("resources") ? 'Resources' : 'Learn modular'}
                                            <i className={'icon-dropdown'}></i></li>
                                    </Link>
                                    <li className="breadcrumb-item active ps-0 ps-md-4 pb-0 mb-0" aria-current="page">
                                        {frontmatter.title}
                                    </li>
                                </ol>
                            </nav>
                            }

                            {frontmatter.author && <div className={'author'}><div className={'authorImage'}><Image alt={frontmatter.author.name} filename={frontmatter.author.avatar} /></div>By <strong> {frontmatter.author.name}</strong></div>}
                            {frontmatter.date && frontmatter.path === '/resources/' && <div className={'date'}>Published on: <strong>{frontmatter.date}</strong></div>}
                            <div className={'clear'}/>
                        </div>

                        {frontmatter.image &&
                        <div className={'main-image'}>
                            <Image alt={frontmatter.title} filename={frontmatter.image} />
                        </div>}

                        <Sticky topOffset={-100}>
                            <div className={'toc'}>
                                <div className={'toc-inner'}>
                                    {data.allMarkdownRemark.group.map((group, groupIndex) =>{
                                        return(
                                            <TocGroup key={groupIndex} markdownRemark={markdownRemark} group={group} headings={headings} frontmatter={frontmatter}/>
                                        )
                                    })}
                                </div>


                                <a href={data.markdownRemark.frontmatter.edit} className={'suggest-button'} target={'_blank'} rel={'noreferrer'}>
                                    <i className={'icon-edit'}/>SUGGEST AN EDIT
                                </a>
                            </div>
                        </Sticky>

                        <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />

                        <FeaturedLearn withArrow={true} current={frontmatter.slug}/>
                    </div>
                </div>
            </main>
        </div>
        </Layout>
    )
}

export const pageQuery = graphql`
  query($id: String!) {

    allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___order] }
        filter: {fileAbsolutePath: {regex: "/learn/"}}
        ){
        group(field: frontmatter___category) {
          edges {
            node {
              id
              frontmatter {
                title
                order
                slug
                category
                subcategory
              }
            }
          }
          group(field: frontmatter___subcategory) {
            edges {
              node {
                id
                frontmatter {
                  title
                  category
                  subcategory
                  slug
                }
              }
            }
          }
        }
      }

    markdownRemark(id: { eq: $id }) {
      html
      id
      headings {
        value
        depth
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        edit
        slug
        title
        category
        subcategory
        image
        author{
            name
            avatar
        }
      }
    }
  }
`
