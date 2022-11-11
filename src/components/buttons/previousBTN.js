import * as React from "react"

const PreviousBTN = ({type}) => (
        <div className={`row ${type === 'next' && 'justify-content-md-end'}`}>
            <div className={'col-auto'}>
                <div className={`row items-center featured-button featured-button-${type}`}>
                    <div className={`col-auto ${type === 'next' ? 'order-2' : 'order-1'}`}>

                        {type === 'prev' ?
                            <svg width="14px" height="13px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
                                    <g transform="translate(-299.000000, -1546.000000)" stroke="#000000" strokeWidth="1.2">
                                        <g transform="translate(200.000000, 1470.000000)">
                                            <g transform="translate(69.000000, 57.000000)">
                                                <g transform="translate(30.697984, 0.312500)">
                                                    <g transform="translate(6.000000, 25.000000) scale(-1, 1) rotate(-90.000000) translate(-6.000000, -25.000000) translate(1.000000, 19.000000)">
                                                        <line x1="4.89102643" y1="0" x2="4.89102643" y2="11.2095795"/>
                                                        <polyline strokeLinejoin="bevel" points="0 6.69019917 5 12 10 6.69019917"/>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> :

                            <svg width="14px" height="13px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
                                    <g transform="translate(-1374.000000, -1546.000000)" stroke="#000000" strokeWidth="1.2">
                                        <g transform="translate(200.000000, 1470.000000)">
                                            <g transform="translate(712.000000, 57.000000)">
                                                <g transform="translate(395.000000, 0.000000)">
                                                    <g transform="translate(17.697984, 0.312500)">
                                                        <g transform="translate(56.302016, 25.000000) scale(-1, 1) rotate(-270.000000) translate(-56.302016, -25.000000) translate(51.302016, 19.000000)">
                                                            <line x1="4.89102643" y1="0" x2="4.89102643" y2="11.2095795" id="Path"/>
                                                            <polyline id="Path" strokeLinejoin="bevel" points="0 6.69019917 5 12 10 6.69019917"/>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>}
                    </div>
                    <div className={`col-auto ${type === 'next' ? 'order-1' : 'order-2'}`}>
                        {type === 'prev' ? 'Previous' : 'Next'}
                    </div>
                </div>
            </div>

        </div>
    )


export default PreviousBTN
