import * as React from "react"
import Image from "../imageComponent";
import Button from "../buttons/button";

export default class Card extends React.Component {
    render() {
        return <div className={'card'}>
            <div className={'image-container'}>
                <Image alt={this.props.title} filename={this.props.image} />
            </div>
            <div className={'text-container'}>
                <div className={'title'}>{this.props.title}</div>
                <div className={'text'} dangerouslySetInnerHTML={{
                    __html: this.props.text
                }}>
                </div>
                {this.props.button && <Button class={'simple'} type={'internal'} text={this.props.button} modal={this.props.modal} className={'button button-simple'}/>}
            </div>
        </div>
    }
}