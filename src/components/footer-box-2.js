import * as React from "react";

function FooterBox2({ footerBoxes2 }) {
	return (
		<div className="footer-boxes-2">
			<h2 className="footer-title">Start using Celestia</h2>
			<div className={"footer-box-wrapper"}>
				{footerBoxes2 &&
					footerBoxes2.map((box, index) => {
						return (
							<div key={index} className={"footer-box-2"}>
								<div className={"footer-box-inner"}>
									{/* <div className={"bg"} /> */}
									<div className={"inner"}>
										<div className={"title"}>{box.title}</div>
										<div className={"text"}>{box.text}</div>
										<div className={"footer-box-inner-bottom"}>
											<div className='link-wrapper'>
												<a id={box.link.id} className='link' href={box.link.href} target='_blank'>
													{box.link.text}
													<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'>
														<path
															stroke='#7B2BF9'
															stroke-linecap='square'
															stroke-width='1.5'
															d='M3.61218 12.0721L11.0761 4.60823'
														/>
														<path
															stroke='#7B2BF9'
															stroke-linecap='square'
															stroke-linejoin='bevel'
															stroke-width='1.5'
															d='M11.5254 11.0752V4.00413H4.45432'
														/>
													</svg>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default FooterBox2;
