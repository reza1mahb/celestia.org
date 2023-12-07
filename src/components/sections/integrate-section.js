import React from 'react';

const IntegrateSection = () => {
    return (
        <section className={'integrate-section pb-0'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'row'}>
                        <div className={'col box me-md-1'}>
                            <div className={'subtitle'}>Integrate</div>
                            <div className={'title'}>Blobstream</div>
                            <div className={'text'}>
                                Use Celestia as the DA layer for your Ethereum L2.
                            </div>
                            <a href={'/'} className={'button button-simple'}>Blobstream documentation</a>
                        </div>
                        <div className={'col box ms-md-1'}>
                            <div className={'subtitle'}>Integrate</div>
                            <div className={'title'}>Node API</div>
                            <div className={'text'}>
                                Use the celestia-node API to publish and retrieve transactions from Celestia.
                            </div>
                            <a href={'/'} className={'button button-simple'}>Node API Documentatio</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntegrateSection;
