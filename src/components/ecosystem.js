import React from "react"
import Image from "./imageComponent";

export default class Ecosystem extends React.Component {

    render() {
        return <a href={this.props.ecosystem.url} target={'_blank'} rel={'noreferrer'}>
            <div className={'ecosystem'}>
                <div className={'logo-container'} >
                    <Image alt={this.props.ecosystem.title} filename={this.props.ecosystem.image} />
                </div>
                <div className={'category'}>{this.props.category.name}</div>
                <div className={'title'}>{this.props.ecosystem.title}</div>
                <div className={'text'}>{this.props.ecosystem.text}</div>
            </div>
        </a>
    }
}
