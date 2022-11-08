import * as React from "react"
import {Link, navigate} from "gatsby";
import ToC from "./toc";
import {useState} from "react";

const RenderSubCategory = function (subCategory, markdownRemark){
    const opened = subCategory.edges[0].node.frontmatter.subcategory === '' || subCategory.edges[0].node.frontmatter.subcategory === markdownRemark.frontmatter.subcategory ? true : false;
    const isActive = subCategory.edges[0].node.frontmatter.slug ===  markdownRemark.frontmatter.slug ? true : false;

    const [isOpen,setIsOpen] = useState(opened)

    console.log(subCategory.edges[0].node.frontmatter.slug)
    console.log(markdownRemark.frontmatter.slug)

    function showFirstElement(){
        if(!isOpen){
            navigate(subCategory.edges[0].node.frontmatter.slug)
        }else{
            setIsOpen(!isOpen)
        }
    }

    return(
        <>
            <div className={'subcategory-title'} onClick={()=>showFirstElement()}>{subCategory.edges[0].node.frontmatter.subcategory}</div>
            <div className={`subcategory-items ${isOpen ? 'opened' : 'closed'}`}>
                {subCategory.edges.map((article,index) => {
                    return (
                        <div key={index} className={'row'}>
                            <div className={'col-12'}>
                                <div className={'article-title'}>
                                    <Link className={`article-link ${article.node.frontmatter.slug ===  markdownRemark.frontmatter.slug && 'active'}`} to={article.node.frontmatter.slug} activeClassName={'active'}>{article.node.frontmatter.title}</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default function TocGroup(props) {
    const group = props.group;
    const frontmatter = props.frontmatter;
    const headings = props.headings;
    const markdownRemark = props.markdownRemark;

    const opened = group.edges[0].node.frontmatter.category === '' || group.edges[0].node.frontmatter.category === markdownRemark.frontmatter.category ? true : false;

    const [isOpen,setIsOpen] = useState(opened)

    return (
        <div key={props.key} className={`col-12 ${isOpen ? 'opened' : 'closed'}`}>
            <div className={'group-title'} onClick={()=>setIsOpen(!isOpen)}>
                {group.edges[0].node.frontmatter.category}

                {group.edges[0].node.frontmatter.category !== '' && <svg  viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-485.000000, -1044.000000)">
                            <g transform="translate(227.000000, 410.000000)">
                                <g transform="translate(269.000000, 645.000000) rotate(-90.000000) translate(-269.000000, -645.000000) translate(258.000000, 634.000000)">
                                    <rect fill="#EDEDED" x="0" y="0" width="22" height="22" rx="4"/>
                                    <polyline stroke="#000000" strokeWidth="1.5" strokeLinecap="round" transform="translate(10.694444, 11.152778) rotate(-270.000000) translate(-10.694444, -11.152778) " points="7.94444444 9.77777778 10.6944444 12.5277778 13.4444444 9.77777778"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>}
            </div>
            <div className={'group-items'}>

                {group.group.map(function(subCategory, subCategoryIndex){
                    return(
                        <>
                            {RenderSubCategory(subCategory,markdownRemark)}
                        </>
                    )
                })}


            </div>
        </div>
    )
}
