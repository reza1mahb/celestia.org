import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
export default class AnchorMenu extends React.Component {
    render() {
        return <div className={'anchorMenu mt-4'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <table>
                        <tbody>
                            {this.props.anchors.map((anchor,index) => (
                                <tr key={index}>
                                    <td><AnchorLink to={'#'+anchor.anchor} className="anchor-link" stripHash>{anchor.text} <i className={'icon-arrow-down ms-3'}/></AnchorLink></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    }
}
