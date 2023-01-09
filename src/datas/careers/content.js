import perkAnimation1 from '../../images/illustrations/career-1/data.json'
import perkAnimation2 from '../../images/illustrations/career-2/data.json'
import perkAnimation3 from '../../images/illustrations/career-3/data.json'
import perkAnimation4 from '../../images/illustrations/career-4/data.json'


export const content = {
    title : 'Careers',
    subtitle: 'We’re on a mission to change the way that blockchains and decentralized applications are built—making them more secure, sovereign and scalable.',
    text: 'Join our team of leading engineers, researchers and entrepreneurs in pioneering the first modular blockchain design.',
    button: {
        text: 'Current openings',
        url: 'https://jobs.lever.co/celestia'
    },
    perks:{
        title: 'Perks',
        perks: [{
                title: 'Employment benefits',
                image: 'careers/careers-1.svg',
                animation: perkAnimation1
            },{
                title: '4 weeks annual vacation',
                image: 'careers/careers-2.svg',
                animation: perkAnimation2
            },{
                title: 'A share of the initial token supply',
                image: 'careers/careers-3.svg',
                animation: perkAnimation3
            },{
                title: 'Flexible and remote work environment',
                image: 'careers/careers-4.svg',
                animation: perkAnimation4
            }
        ]
    }
}

export const FooterBoxes = [
    {
        title: 'Experiment with testnet',
        text: 'Join a growing ecosystem of developers building rollups and applications on the Mocha testnet.',
        button: {
            text: 'Get started',
            href: 'https://docs.celestia.org/',
            id: 'operator',
            type: 'simple'
        }
    },
    {
        title: 'Join our growing team',
        text: 'Join our team of leading engineers in pioneering the first modular blockchain network.',
        button: {
            text: 'Current openings',
            href: '/careers',
            id: 'career',
            type: 'simple'
        }
    }
]
