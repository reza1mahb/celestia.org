import * as React from "react"
import Image from "../imageComponent";

export default class TwoColumnH2 extends React.Component {
    render() {
        return <section className={`two-column-h2 ${this.props.direction}`}>
            <div className={'row align-items-center'}>
                <div className={`col col-12 col-lg-6 ${this.props.direction === 'rtl' ? 'order-lg-2' : 'order-lg-1'}`}>
                    <Image alt={this.props.title} filename={this.props.image} />
                </div>
                <div className={`d-table-cell align-middle col col-12 col-lg-6 ${this.props.direction === 'rtl' ? 'order-lg-1' : 'order-lg-2'}`}>
                    <div className={'text'}>
                        <h2 className={'with-decor mt-4 mt-lg-0'}>{this.props.title}</h2>
                        {this.props.text}
                    </div>
                </div>
            </div>
        </section>
    }
}
