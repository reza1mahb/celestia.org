import * as React from "react"

import ImageWithText from "../components/sections/image-with-text";
import ColumnWithIcon from "../components/modules/columnWithIcon";

import {content, Technologies, FooterBoxes} from "../datas/technology/content";
import Layout from "../components/layout";

import { seoContent } from "../datas/technology/seoContent";
import SEO from "../components/seo";

const TechnologyPage = () => {
    return (
        <Layout footerBoxes={FooterBoxes}>
            <SEO
				title={seoContent.title}
				description={seoContent.description}
                ogTitle={seoContent.ogTitle}
				image={seoContent.image}
			/>
            <div className={'technology-page'}>
                <main>
                    <div className={'container'}>
                        <h1 className={'main mb-3 mb-md-5'}>{content.title}</h1>
                        <h5 className={'main mb-3 mb-md-5'}>{content.subtitle}</h5>

                        {Technologies.map((tech,index) => (
                            <ImageWithText key={index} direction={tech.direction} video={tech.video} animation={tech.animation} title={tech.title} text={tech.text}/>
                        ))}


                        <section className={'column-section'}>
                            <h4 className={'main'}>{content.columnSection.title}</h4>
                            <div className={'subtitle'}>{content.columnSection.subtitle}</div>

                            <div className={'row mt-5'}>
                                {content.columnSection.columns.map((column,index) => (
                                    <div className={'col col-12 col-sm-6'} key={index}>
                                        <ColumnWithIcon column={column}/>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </Layout>
    )
}

export default TechnologyPage
