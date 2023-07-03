import * as React from "react"

import TeamMember from "../components/modules/teamMember";
import AnchorMenu from "../components/modules/anchorMenu";

import {content} from "../datas/team/content";
import {anchors} from "../datas/team/content";
import {FooterBoxes} from "../datas/team/content";
import {teamMembers} from "../datas/team/team-members";
import {advisors} from "../datas/team/advisors";
import Layout from "../components/layout";

import { seoContent } from "../datas/team/seoContent";
import SEO from "../components/seo";

const TeamPage = () => {
    return (
        <Layout footerBoxes={FooterBoxes}>
            <SEO
				title={seoContent.title}
				description={seoContent.description}
				image={seoContent.image}
			/>
            <div className={'team-page'}>
                <main>
                    <div className={'container'}>
                        <h1 className={'main mb-4'}>{content.title}</h1>

                        <div className={'row mt-md-5'}>
                            <div className={'col-12 col-md-6 pe-md-5'}>
                                <h5>{content.subtitle}</h5>
                                <AnchorMenu anchors={anchors}/>
                            </div>
                            <div className={'col-12 col-md-6 pt-3 pt-md-0'}>
                                <div className={'content-text'} dangerouslySetInnerHTML={{__html: content.text}}/>
                            </div>
                        </div>

                        <div className={'row team-members'}>
                            <div className={'manualAnchor'} id={content.menus[0].id}/>
                            {teamMembers.map(member => (
                                <div className={'col col-xl-3 col-lg-4 col-sm-6 col-xs-12 text-center text-sm-start'} key={member.image}>
                                    <TeamMember member={member}/>
                                </div>
                            ))}
                            <div className={'clear'}/>
                        </div>

                        <h2 className={'with-decor d-table mx-auto d-md-block mb-5 mb-md-0'}>Advisors</h2>
                        <div className={'manualAnchor'} id={content.menus[1].id}/>

                        <div className={'row team-members advisors'}>
                            {advisors.map(member => (
                                <div className={'col col-xl-3 col-lg-4 col-sm-6 col-xs-12 text-center text-sm-start'} key={member.image}>
                                    <TeamMember member={member}/>
                                </div>
                            ))}
                            <div className={'clear'}/>
                        </div>

                    </div>
                </main>
            </div>
        </Layout>
    )
}

export default TeamPage
