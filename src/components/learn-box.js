import React from "react"
import { Link } from "gatsby"
import Image from "./imageComponent";
import PreviousBTN from "./buttons/previousBTN";

const LearnBox = ({ post, learnmodules,type }) => (
    <Link to={post.frontmatter.slug} state={{learnmodules:learnmodules}}>
        <div className={'learn-box'}>
            <PreviousBTN type={type}/>
            <div className={'title'}>{post.frontmatter.title}</div>
            <div className={'text'}>{post.frontmatter.description}</div>
            <div className={'button button-external'}>Read now <i className={'icon-external-link'}/></div>
        </div>
    </Link>
)

export default LearnBox
