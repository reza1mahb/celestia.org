import * as React from "react"
import {Link, navigate} from "gatsby";
import ToC from "./toc";
import {useState} from "react";

const RenderSubCategory = function (subCategory, markdownRemark){
    const opened = subCategory.title === '' || subCategory.title === markdownRemark.frontmatter.subcategory ? true : false;
    const isActive = subCategory.slug ===  markdownRemark.frontmatter.slug ? true : false;

    const [isOpen,setIsOpen] = useState(opened)

    function showFirstElement(){
        if(!isOpen){
            navigate(subCategory.articles[0].slug)
        }else{
            setIsOpen(!isOpen)
        }
    }

    return(
        <>
            <div className={'subcategory-title'} onClick={()=>showFirstElement()}>{subCategory.title}</div>
            <div className={`subcategory-items ${isOpen ? 'opened' : 'closed'}`}>
                {subCategory.articles.map((article,index) => {
                    return (
                        <div key={index} className={'row'}>
                            <div className={'col-12'}>
                                <div className={'article-title'}>
                                    <Link className={`article-link ${article.slug ===  markdownRemark.frontmatter.slug && 'active'}`} to={article.slug} activeClassName={'active'}>{article.title}</Link>
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

    const opened = group.category === '' || group.category === markdownRemark.frontmatter.category ? true : false;

    const [isOpen,setIsOpen] = useState(opened)

    return (
        <div key={props.key} className={`col-12 ${isOpen ? 'opened' : 'closed'}`}>
            <div className={'group-title'} onClick={()=>setIsOpen(!isOpen)}>
                {group.category}

                {group.category !== '' && <svg  viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
                {group.subcategories && group.subcategories.map(function(subCategory, subCategoryIndex){
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
