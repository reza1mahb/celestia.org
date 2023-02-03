import * as React from "react"
import PurpleBox from "../modules/purple-box";

export default class PurpleSection extends React.Component {
    render() {
        return (
            <section className={this.props.enableBackers ? 'purple-section' : 'purple-section without-backers'}>
                <div className={'anchor'} id={this.props.anchor}/>
                <div className={'container'}>
                    <div className={'row d-lg-table'}>
                        <div className={'col-12 col-lg-6 pe-lg-5 d-table-cell align-middle'}>
                            <h2 className={'with-decor'}>{this.props.purpleData.title}</h2>
                            <div className={'text'}>
                                {this.props.purpleData.text}
                            </div>
                        </div>
                        <div className={'col-12 col-lg-6 ps-lg-5 pe-lg-5 d-lg-table-cell align-middle'}>
                            <div className={'row mt-5 mt-lg-0 pe-lg-5'}>
                                { this.props.purpleData.boxes && this.props.purpleData.boxes.map(function(box){
                                    return <div key={box.id} className={'col-12 col-md-6 col-lg-12'}><PurpleBox icon={box.icon} title={box.title} text={box.text} buttonText={box.button.title} buttonUrl={box.button.url}/></div>
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
