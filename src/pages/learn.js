import * as React from "react"
import { graphql } from 'gatsby'
import {FooterBoxes} from "../datas/resources/content";
import Layout from "../components/layout";

import LearnBox from "../components/learn-box"

const LearnPage = ({
       data: {
           allMarkdownRemark: { edges },
       },
   }) => {
    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => <div className={'col col-12 col-md-6 pt-5'}><LearnBox withArrow={false} learnmodules={edges} key={edge.node.id} post={edge.node} /></div>)

    return <Layout footerBoxes={FooterBoxes}>
        <div className={'learn-page'}>
            <main>
                <div className={'container'}>
                    <h1 className={'main'}>Learn Modular</h1>
                    <div className={'row mb-5 pb-5 learn-modules'}>
                        {Posts}
                    </div>
                </div>
            </main>
        </div>
    </Layout>
}
export default LearnPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
    sort: { order: ASC, fields: [frontmatter___order] }
    filter: {fileAbsolutePath: {regex: "/learn/"}}
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            icon
            title
            description
          }
        }
      }
    }
  }
`
