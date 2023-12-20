export const lightNode = {
	title: "Light nodes for developers",
	button: {
		text: "Start ligh node",
		class: "simple",
		type: "external",
		url: "https://docs.celestia.org/nodes/light-node",
	},
	description: "How developers can use a Celestia light node for their chain",
	items: [
		{
			id: 1,
			title: "Publish data",
			text: "Publish transaction data to Celestia’s DA network.",
			type: "external",
			image: "run-a-node/publish-image.png",
			link: {
				text: "Submit data to Celestia",
				url: "/",
			},
		},
		{
			id: 2,
			title: "Retrieve data",
			text: "Retrieve transaction data from Celestia’s DA network.",
			type: "external",
			image: "run-a-node/retrieve-image.png",
			link: {
				text: "Retrieve data from Celestia",
				url: "/",
			},
		},
		{
			id: 3,
			title: "Manage Tia wallet",
			text: "Generate a Celestia wallet to store Tia and pay for publishing transaction data to Celestia.",
			type: "external",
			image: "run-a-node/manage-image.png",
			link: {
				text: "Setup wallet",
				url: "/",
			},
		},
	],
};
