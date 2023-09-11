import * as React from "react"
import { Link } from "gatsby"
import {glossaries} from "../datas/glossary/data";

const GlossaryNav = ({url}) => {

        const paths = url && url.split("/").filter(entry => entry !== "");
        const lastPath = paths && paths[paths.length - 1];

        const allGlossaries = []
        let prev, next = []


        glossaries && glossaries.map(glossary =>{
            glossary && Object.values(glossary)[0].map(result=>{
                allGlossaries.push(result);
            })
        })


        allGlossaries && allGlossaries.map((glossary,index) => {
            if(glossary.url === lastPath){
                prev = allGlossaries[index-1] ? allGlossaries[index-1] : allGlossaries[allGlossaries.length-1]
                next = allGlossaries[index+1] ? allGlossaries[index+1] : allGlossaries[0]
            }
        })


        return (
            <div>
            {prev && next ? <div className={'row glossary-nav pt-5 pt-md-0 mt-5'}>
                <div className={'col col-12 col-md-6 border-right'}>
                    {prev && <Link to={'/glossary/'+prev.url+'/'} state={{url: prev.url}}>
                        <div className={'glossary'}>
                            <div className={'title'}>
                                {prev.title}
                                <i className={'icon-arrow-down'}/>
                            </div>
                            {prev.text}
                        </div>
                    </Link>}
                </div>
                <div className={'col col-12 col-md-6'}>
                    <Link to={'/glossary/'+next.url+'/'} state={{url: next.url}}>
                        <div className={'glossary'}>
                            <div className={'title'}>
                                {next.title}
                                <i className={'icon-arrow-down'}/>
                            </div>
                            {next.text}
                        </div>
                    </Link>
                </div>
            </div> : <div/>}
            </div>
        )
}

export default GlossaryNav
