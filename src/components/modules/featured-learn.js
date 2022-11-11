import * as React from "react"
import { graphql,StaticQuery } from 'gatsby'

import LearnBox from "../../components/learn-box"

export default function FeaturedLearn(props) {
    return (
        <StaticQuery
            query={graphql`
        query {
    allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
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
      `}

            render={data => (
                <div className={'learning-modules'}>
                        {data.allMarkdownRemark.edges
                            .map((edge,index) => {
                                if(edge.node.frontmatter.slug === props.current) {
                                    const prev = index === 0 ? data.allMarkdownRemark.edges.length - 1 : index-1;
                                    const next = index === data.allMarkdownRemark.edges.length - 1 ? 0 : index+1;
                                    console.log(index);

                                    return (
                                        <div className={'row pb-5 learn-modules learn-modules-footer smaller'}>
                                            <div className={'col col-12 col-md-6 pt-5 prev'}>
                                                <LearnBox
                                                    type={'prev'}
                                                    key={data.allMarkdownRemark.edges[prev].node.id}
                                                    post={data.allMarkdownRemark.edges[prev].node}/>
                                            </div>
                                            <div className={'col col-12 col-md-6 pt-5 next'}>
                                                <LearnBox
                                                    type={'next'}
                                                    key={data.allMarkdownRemark.edges[next].node.id}
                                                    post={data.allMarkdownRemark.edges[next].node}/></div>
                                        </div>)
                                }
                            })
                        }
                </div>
            )}
        />
    )
}
