import * as React from "react"

import {FooterBoxes} from "../../datas/team/content";
import Layout from "../../components/layout";
import BreadCrumb from "../../components/breadcrumb";
import SocialShare from "../../components/socialShare";
import GlossaryNav from "../../components/glossary-nav";
import {Helmet} from "react-helmet";
import twitterCardImage from "../../images/glossary-twitter-card.png";

const title = 'Node';

class GlossaryContent extends React.Component {
    render() {
        return (
            <div className={'glossary-content'}>

                <p>A node is a device that participates in a blockchain protocol by running its software. Blockchains typically have multiple different node types that carry out different tasks. Some of those tasks include sending and receiving transactions, storing blocks, and participating in consensus.
                </p>

            </div>
        )
    }
}

class GlossarySubpage extends React.Component {
    render() {
        return (
            <Layout footerBoxes={FooterBoxes}>
                <Helmet>
                    <meta property="og:url" content={this.props.location.href} />
                    <meta property="og:title" content={'Celestia - '+title} />
                    <meta property="og:description" content="" />
                    <meta property="og:image" content={this.props.location.origin + twitterCardImage} />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@CelestiaOrg" />
                    <meta name="twitter:title" content={'Celestia - '+title} />
                    <meta name="twitter:description" content="" />
                    <meta name="twitter:image" content={this.props.location.origin + twitterCardImage} />
                </Helmet>
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