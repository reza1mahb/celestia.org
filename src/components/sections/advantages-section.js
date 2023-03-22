import * as React from "react"
import Advantage from "../modules/advantage";
import Button from "../buttons/button";

export default class AdvantagesSection extends React.Component {
    render() {
        return <section className={'advantages-section'}>
            <div className={'row'}>
                { this.props.advantages && this.props.advantages.map(function(advantage){
                    return <div key={advantage.image} className={'col col-12 col-lg-6 pe-md-5'}>
                        <Advantage id={advantage.id} animation={advantage.animation} text={advantage.text} title={advantage.title} image={advantage.image}/>
                    </div>
                })}
            </div>
            <div className={'row justify-content-center'}>
                <div className={'col-auto'}>
                    <Button type={'internal'} class={'simple'} url={'/technology/'} text={'Discover more'}/>
                </div>
            </div>
        </section>
    }
}

