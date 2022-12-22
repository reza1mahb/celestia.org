import * as React from "react"

import {FooterBoxes} from "../../datas/team/content";
import Layout from "../../components/layout";
import BreadCrumb from "../../components/breadcrumb";
import SocialShare from "../../components/socialShare";
import GlossaryNav from "../../components/glossary-nav";
import Image from "../glossary/images/data-availability.png";

const title = 'Data availability';

class GlossaryContent extends React.Component {
    render() {
        return (
            <div className={'glossary-content'}>
                <p>Data availability answers the question, has this data been published? Specifically, a node will verify data availability when it receives a new block that is getting added to the chain. The node will attempt to download all the transaction data for the new block to verify availability. If the node can download all the transaction data, then it successfully verified data availability, proving that the block data was actually published to the network.
                </p>
                
                <img src={Image} width="1000" height="500"/>
                
                <p> For an overview on data availability, read <a href="https://coinmarketcap.com/alexandria/article/what-is-data-availability">What is Data Availability?</a>
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
