export const faqs = [
	{
		id: 1,
		question: "What is Celestia?",
		text: "Celestia is the first modular blockchain network. By decoupling consensus from execution, Celestia enables anyone to easily deploy their own blockchain, without the overhead of bootstrapping a new consensus network. Blockchains on Celestia are simultaneously scalable, sovereign and secure.",
	},
	{
		id: 2,
		question: "What stage of development is Celestia in?",
		text: "Celestia is at the testnet stage of development, approaching a mainnet launch later next year. In May 2022, we launched the Mamaki testnet for developers to openly test the network’s functionality. In December 2022, we upgraded the Mamaki testnet to Mocha and introduced a new developer-focused testnet, Arabica. In 2023, we plan to launch an incentivized testnet in the lead up to mainnet.",
	},
	{
		id: 3,
		question: "Will Celestia have a token and if so, what will it be used for?",
		text: "Celestia is designed to have a token used to secure the network via Proof of Stake and to pay for transaction fees on the network, and eventually a fee burn mechanism similar to EIP-1559 in Ethereum.",
	},
	{
		id: 4,
		question: "How does Celestia scale?",
		text: "Celestia is able to scale as the number of users (light nodes) in the network increases. Celestia remains secure so long as there are enough nodes on the network to sample the entire block. This means that as more nodes join the network and sample, the block size can increase accordingly without sacrificing security or decentralization. Doing so on a traditional blockchain would sacrifice decentralization because a bigger block size would create a larger hardware requirement for nodes to download and verify data. Rollups also depend on data availability for their scalability, so better scaling potential for Celestia will also translate to better scaling potential for the rollups utilizing Celestia.",
	},
];
