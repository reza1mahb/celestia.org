import * as React from "react"

import {FooterBoxes} from "../../datas/team/content";
import Layout from "../../components/layout";
import BreadCrumb from "../../components/breadcrumb";
import SocialShare from "../../components/socialShare";
import GlossaryNav from "../../components/glossary-nav";
import {Helmet} from "react-helmet";
import twitterCardImage from "../../images/glossary-twitter-card.png";

const title = 'Composability';

class GlossaryContent extends React.Component {
    render() {
        return (
            <div className={'glossary-content'}>
                <p>The ability for applications on a blockchain to read and write state to each other. Composability allows applications to coordinate with and build on top of one another such that it enables an ecosystem of interconnected applications.
                </p>

                <p>For example, an application that automates liquidity strategies on Uniswap requires it to be reading and writing the state of Uniswap’s contracts.
                </p>

            </div>
        )
    }
}

class GlossarySubpage extends React.Component {
    render() {
        return (
            <Layout footerBoxes={FooterBoxes}>
                <div className={'glossary-subpage'}>
                    <Helmet>
                        <title>Celestia - {title}</title>
                        <meta property="og:url" content={this.props.location.href} />
                        <meta property="og:title" content={'Celestia - '+title} />
                        <meta property="og:description" content="" />
                        <meta property="og:image" content={twitterCardImage} />

                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:site" content="@CelestiaOrg" />
                        <meta name="twitter:title" content={'Celestia - '+title} />
                        <meta name="twitter:description" content="" />
                        <meta name="twitter:image" content={twitterCardImage} />
                    </Helmet>
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
