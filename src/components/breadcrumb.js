import * as React from "react";
import { Link } from "gatsby";

class BreadCrumb extends React.Component {
	render() {
		const alpha = isNaN(this.props.title.charAt(0)) ? this.props.title.charAt(0) : "#";

		return (
			<nav aria-label='breadcrumb'>
				<ol className='breadcrumb'>
					<Link to={"/resources/"}>
						<li className='d-none d-md-block breadcrumb-item'>
							Resources <i className={"icon-dropdown"}></i>
						</li>
					</Link>
					<Link to={"/glossary/"}>
						<li className='breadcrumb-item'>
							Glossary <i className={"icon-dropdown"}></i>
						</li>
					</Link>
					<Link to={"/glossary#" + alpha + "/"}>
						<li className='breadcrumb-item text-uppercase'>
							{alpha} <i className={"icon-dropdown"}></i>
						</li>
					</Link>
					<li className='breadcrumb-item active' aria-current='page'>
						{this.props.title}
					</li>
				</ol>
			</nav>
		);
	}
}

export default BreadCrumb;
