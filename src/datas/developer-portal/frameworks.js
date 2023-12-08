export const frameworks = {
	title: "Choose a framework",
	subtitle: "",
	description: "Get started quickly by using Celestia with leading rollup frameworks.",
	categories: [
		{
			id:1,
			title: 'Ethereum',
			items: [
				{
					id: 1,
					title: "Arbitrum Orbit",
					text: "Arbitrum Orbit is the ideal way to permissionlessly launch your own custom chain.",
					image: "developer-portal/arbitrum.png",
					type: "external",
					link: {
						text: "Coming Soon",
					},
				},
				{
					id: 3,
					title: "OP Stack",
					text: "The OP Stack is a modular, open-source blueprint for highly scalable, highly interoperable blockchains of all kinds.",
					image: "developer-portal/opstack.png",
					type: "external",
					link: {
						text: "Explore OP Stack",
						url: "https://stack.optimism.io/",
					},
				},
				{
					id: 4,
					title: "Polygon CDK",
					text: "Polygon CDK (Chain Development Kit) makes it easy for developers to design and launch zero-knowledge (ZK) L2s on Ethereum, on demand.",
					image: "developer-portal/polygon.png",
					type: "external",
					link: {
						text:"Coming Soon",
					},
				}
			]
		},{
			id:2,
			title: 'Sovereign',
			items: [
				{
					id: 5,
					title: "Rollkit",
					text: "Rollkit is a rollup framework that gives developers the freedom to deploy rollups throughout the modular stack.",
					image: "developer-portal/rollkit.png",
					type: "external",
					link: {
						text: "Explore Rollkit",
						url: "https://rollkit.dev/",
					},
				},
				{
					id: 6,
					title: "Sovereign SDK",
					text: "A framework for building seamlessly scalable and interoperable rollups that can run on any blockchain.",
					image: "developer-portal/sovereign.png",
					type: "external",
					link: {
						text: "Explore Sovereign SDK",
						url: "https://www.sovereign.xyz/",
					},
				}
			]
		}
	],
};
