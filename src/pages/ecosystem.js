import * as React from "react"

import {ecosystemCategories} from "../datas/ecosystem/ecosystems";
import {FooterBoxes} from "../datas/team/content";
import Layout from "../components/layout";
import {Helmet} from "react-helmet";
import {useState} from "react";
import Image from "../components/imageComponent";
import Ecosystem from "../components/ecosystem";



const EcosystemPage = () => {
    const [selectedCategory,setSelectedCategory] = useState('all')
    const [search,setSearch] = useState(false)
    const [open,setOpen] = useState(false)

    function searchApp(e){
        e.preventDefault();
        setSelectedCategory('all');
        setSearch(e.target.value)
    }

    function openCategorySelector(category){
        setOpen(!open);
        setSelectedCategory(category);
    }

    return (
        <Layout footerBoxes={FooterBoxes}>
            <Helmet>
                <title>Celestia - Ecosystem</title>
            </Helmet>
            <div className={'ecosystem-page'}>
                <main>
                    <div className={'container'}>

                        <h1 className={'main mb-3 mb-md-5'}>Celestia Ecosystem</h1>
                        <div className={'subtitle'}>Discover a wide range of apps and services built in the Celestia ecosystem.</div>

                        <div className={'row my-2 pt-2 my-lg-5 pt-lg-5 pb-3'}>
                            <div className={'col-12 col-lg-4'}>
                                <div className={'category-selector'}>
                                    <div className={`category-selector-box ${open ? 'opened' : ''}`}>
                                        <ul>
                                            <li onClick={()=>openCategorySelector('all')} className={`${selectedCategory === 'all' ? 'selected' : ''}`}>All
                                                {selectedCategory === 'all' && <svg id={'mobile-category'} viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
                                            </li>
                                            {ecosystemCategories.map(function(category,index){
                                                return <li onClick={()=>openCategorySelector(category.id)} className={`${selectedCategory === category.id ? 'selected' : ''}`}>{category.name}
                                                    {selectedCategory === category.id && <svg id={'mobile-category'} viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
                                                </li>
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className={'fake'}>&nbsp;</div>
                            </div>
                            <div className={'col-12 col-lg-8'}>
                                <div className={'row'}>
                                    <div className={'col-12 px-1'}>
                                        <div className={'search-input'}>
                                            <input type="text" id={'search'} placeholder={'Search app'} onKeyUp={searchApp}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={'row'}>
                                    {ecosystemCategories.map(function(category,index){
                                        return category.ecosystems && (selectedCategory === 'all' || selectedCategory === category.id) && category.ecosystems.map(function(ecosystem,ecosystemIndex){
                                            return ecosystem && (!search || (search && ecosystem.title.toLowerCase().includes(search.toLowerCase()))) && <div className={'col-12 col-sm-6 col-lg-6 col-xl-4 p-1'} key={ecosystemIndex}>
                                                <Ecosystem category={category} ecosystem={ecosystem}/>
                                            </div>
                                        })
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </Layout>
    )
}

export default EcosystemPage
