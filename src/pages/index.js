import * as React from "react"
import ReactModal from 'react-modal'
import Layout from "../components/layout"

import '../scss/main.scss'
import AdvantagesSection from "../components/sections/advantages-section";
import ImageSection from "../components/sections/image-section";

import {advantages} from "../datas/home/advantages";
import {heroData} from "../datas/home/hero-section";
import {purpleData} from "../datas/home/purple-section";
import {backers} from "../datas/home/backers";
import {roadmaps} from "../datas/home/roadmaps";
import {FooterBoxes} from "../datas/home/content";

import Card from "../components/modules/card";
import Button from "../components/buttons/button";
import PurpleSection from "../components/sections/purple-section";
import HeroSection from "../components/sections/hero-section";
import BackersSection from "../components/sections/backers-sections";
import RoadmapItem from "../components/modules/roadmapItem";
import SignUp from "../components/modals/signUp";


class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.enableBackers = false;
        this.state = {
            isModalOpen: false,
            modalType: ''
        }
    }
    handleModalOpen = event => {
        this.setState({ modalType: event.target.id })
        this.setState({ isModalOpen: true })
        document.body.style.overflow = 'hidden';
    }

    handleModalClose = event => {
        this.setState({ isModalOpen: false })
        document.body.style.overflow = 'unset';
    }
    render() {
      return (
          <Layout footerBoxes={FooterBoxes}>
              <div className={'index-page'}>
                  <main>
                      <HeroSection heroData={heroData}/>

                      <div className={'container'}>
                          <h2 className={'with-decor'}>Advantages</h2>
                          <AdvantagesSection advantages={advantages}/>

                          <section className={'cards-section'}>
                              <h2 className={'with-decor pb-2'}>How it works</h2>
                              <div className={'subtitle'}>Celestia is a minimal blockchain that only orders and publishes transactions and does not execute them. By decoupling the consensus and application execution layers, Celestia modularizes the blockchain technology stack and unlocks new possibilities for decentralized application builders.</div>

                              <div className={'row mt-5'}>
                                  <div className={'col col-12 col-lg-6 pe-lg-4'}>
                                      <Card image={'home/architecture.png'} title={'Traditional monolithic architecture'} text={'<ul><li>Developers can only use programming languages supported by chain\'s execution environment</li><li>All applications run on the same process (the world computer model), with shared gas resources</li><li>Smart contracts cannot be updated without a hard fork</li></ul>'}/>
                                  </div>
                                  <div className={'col col-12 col-lg-6 ps-lg-4'}>
                                      <Card image={'home/celestia-architecture.png'} title={'Celestia-enabled modular architecture'} text={'<ul><li>Developers can effortlessly define their own virtual execution environments; similar to virtual machines</li><li>Each application gets its own sovereign execution space, while inheriting the security of Celestia\'s consensus</li><li>Applications can be updated without main chain hard forks</li></ul>'}/>
                                  </div>
                              </div>
                              <div className={'row justify-content-center pt-5'}>
                                  <div className={'col-auto'}>
                                  <a href="https://celestia.org/learn/" target={'_blank'}>
                                        <button className={'button button-simple button-internal'} role={'button'} tabIndex={0} id={'developer'}>Learn more</button>
                                  </a>                                  
                                </div>
                              </div>
                          </section>

                          <div className={'anchor'} id={'roadmap'}/>
                          <section className={'roadmap-section'}>
                              <h2 className={'with-decor pb-5'}>Roadmap</h2>

                              <ul className={'roadmap-items'}>
                                  { roadmaps && roadmaps.map(function(roadmap,index){
                                      return <RoadmapItem status={roadmap.status} key={roadmap.id} title={roadmap.title} text={roadmap.text}/>
                                  })}
                              </ul>
                              <div className={'clear'}/>
                          </section>

                          <div className={'anchor'} id={'waitlist'}/>
                          <section className={'separate-section'}>
                              <div className={'row'}>
                                  <div className={'col col-12 col-lg-6'}>
                                      <h3 className={'with-decor'}>Run a node on testnet</h3>
                                      <div className={'text'}>Experiment and practice running a node on testnet in preparation for mainnet.</div>
                                      <a href="https://docs.celestia.org/nodes/overview" target={'_blank'}>
                                          <button className={'button button-simple'} id={'operator'} role={'button'} tabIndex={0}>Read the Docs</button>
                                      </a>
                                  </div>
                                  <div className={'col col-12 col-lg-6'}>
                                      <h3 className={'with-decor'}>Build on our developer beta</h3>
                                      <div className={'text'}>Build on Celestia and be the first to explore the benefits of its novel architecture.</div>
                                      <a href="https://docs.celestia.org/" target={'_blank'}>
                                          <button className={'button button-simple'} id={'developer'} role={'button'} tabIndex={0}>Build on Testnet</button>
                                      </a>
                                  </div>
                              </div>
                          </section>

                      </div>
                        <ImageSection logo={true} image={'home/celestia-team.png'} title={'Built by industry-leading engineers, researchers and entrepreneurs'} text={<Button class={'external-big'} type={'internal'} url={'/team/'} text={'View the team'}/>}/>
                        <PurpleSection enableBackers={this.enableBackers} anchor={'join-the-community'} purpleData={purpleData}/>
                        <BackersSection enableBackers={this.enableBackers} backers={backers}/>
                  </main>
                  <ReactModal
                      isOpen={this.state.isModalOpen}
                  >
                      <div className={'inner'}>
                        <SignUp modalType={this.state.modalType}/>
                        <button className={'close-button'} onClick={this.handleModalClose}><i className={'icon-close'} aria-label={'close'}></i></button>
                      </div>
                  </ReactModal>
              </div>
          </Layout>
      )
    }
}

export default IndexPage
