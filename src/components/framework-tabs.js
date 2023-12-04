import React, {useState} from 'react';
import IconCard from "./modules/icon-card";

const FrameworkTabs = ({content, categories, anchorId}) => {
    const [selectedTab,setSelectedTab] = useState('all');
    return (
        <section className='frameworks' id={`${content.items[anchorId].title.replace(/\s+/g, "-").toLowerCase()}`}>
            <div className={"container"}>
                <div className={'subtitle'}>{categories.subtitle}</div>
                <h2 className={"text-center"}>{categories.title}</h2>
                {categories.description && <div className={"description text-center mx-auto mt-3"}>{categories.description}</div>}

                <div className={'tabs row justify-content-center'}>
                    <div className={`col-auto tab-item ${selectedTab === 'all' && 'active'}`} onClick={()=>setSelectedTab('all')}>All</div>
                    {categories.categories.map(function (category) {
                        return <div className={`col-auto tab-item ${selectedTab === category.id && 'active'}`} onClick={()=>setSelectedTab(category.id)}>{category.title}</div>
                    })}
                </div>

                <div className={""}>
                    <div className={"row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-3 gy-5 gy-md-3 my-2 pt-0 pt-md-4 pb-3"}>
                    {categories.categories.map(function (category) {
                        return (
                            category.items.map(function(item){
                                return (selectedTab === 'all' || selectedTab === category.id) && <IconCard
                                    className='icon-card-wrapper col'
                                    key={item.id}
                                    content={item}
                                    variant={"vertical"}
                                    btnClass={
                                        "plausible-event-name=Framework_Click_" +
                                        item.title.replace(/\s/g, "+") +
                                        "--Developer_Portal_Page-Framework_section"
                                    }
                                />
                            })
                        );
                    })}
                    </div>
                </div>

                {anchorId === 0 && <a href="/" className={'button button-simple mx-auto d-table mt-4'}>Add your framework</a>}
            </div>
        </section>
    );
};

export default FrameworkTabs;