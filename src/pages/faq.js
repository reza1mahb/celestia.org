import * as React from "react"

import {FooterBoxes} from "../datas/team/content";
import {faqs} from "../datas/faq/faqs";
import Faq from "../components/modules/faq";
import Layout from "../components/layout";
import {Helmet} from "react-helmet";
import {content} from "../datas/technology/content";

const TeamPage = () => {
    return (
        <Layout footerBoxes={FooterBoxes}>
            <Helmet>
                <title>Celestia - FAQ</title>
            </Helmet>
            <div className={'faq-page'}>
                <main>
                    <div className={'container'}>
                        <h1 className={'main mb-4'}>FAQ</h1>

                        <div className={'row faq-content mb-5'}>
                            {faqs.map(faq => (
                                <div className={'col col-12'} key={faq.id}>
                                    <Faq faq={faq}/>
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
