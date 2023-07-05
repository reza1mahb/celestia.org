import * as React from "react"

import {FooterBoxes} from "../../datas/team/content";
import Layout from "../../components/layout";
import BreadCrumb from "../../components/breadcrumb";
import SocialShare from "../../components/socialShare";
import GlossaryNav from "../../components/glossary-nav";

import { seoContent } from "../../datas/glossary/seoContent";
import SEO from "../../components/seo";

const title = 'Monolithic blockchain';

class GlossaryContent extends React.Component {
    render() {
        return (
            <div className={'glossary-content'}>
                <p>A type of blockchain that performs all four functions at once, which are execution, settlement, consensus, and data availability. Where a modular stack splits up all components across multiple layers, monolithic blockchains do so on a single layer.
                </p>

                <p>Read more about <a href="https://celestia.org/learn/basics-of-modular-blockchains">monolithic blockchains</a>
                </p>

            </div>
        )
    }
}

class GlossarySubpage extends React.Component {
    render() {
        return (
            <Layout footerBoxes={FooterBoxes}>
                <SEO
                    title={'Celestia - '+title}
                    description={seoContent.description}
                    image={seoContent.image}
                />
                <div className={'glossary-subpage'}>
                    <main>
                        <div className={'container'}>
                            <BreadCrumb title={title}/>
                            <h1 className={'main mb-4'}>{title}</h1>

                            <SocialShare title={title} url={this.props.location.href}/>

                            <GlossaryContent/>

                        </div>

                        <div className={'container wide'}>
                            <GlossaryNav url={this.props.location.state && this.props.location.state.url}/>
                        </div>
                    </main>
                </div>
            </Layout>
        )
    }
}

export default GlossarySubpage
