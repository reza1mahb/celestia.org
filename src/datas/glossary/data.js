export const glossaries = [
    {
        'B':[
            {
                url: 'blockchain-cluster',
                title: 'Blockchain cluster',
                text: 'A group of blockchains that can communicate with each other in a trust-minimized way.',
            },{
                url: 'block-header',
                title: 'Block header',
                text: 'The header of a block contains a list of relevant metadata.',
            },{
                url: 'block-producer',
                title: 'Block producer',
                text: 'A full node that is responsible for producing blocks.',
            },{
                url: 'block-space',
                title: 'Block space',
                text: 'The capacity of each block.',
            }
        ]
    },{
        'C':[
            {
                url: 'composability',
                title: 'Composability',
                text: 'The ability for applications on a blockchain to read and write state to each other.',
            },{
                url: 'cosmos-sdk',
                title: 'Cosmos SDK',
                text: 'The Cosmos SDK is a development kit for building PoS layer 1 blockchains with Tendermint as the consensus mechanism.',
            },{
                url: 'cross-chain-interoperability',
                title: 'Cross-chain interoperability',
                text: 'The ability for separate blockchains to communicate and interact with each other.',
            }
        ]
    },{
        'D':[
            {
                url: 'data-availability-sampling',
                title: 'Data availability sampling',
                text: 'A technique in which nodes can verify that data is available for a block without having to download the entire block, formerly known as data availability proofs.',
            },{
                url: 'data-availability',
                title: 'Data availability',
                text: 'The condition of whether or not transaction data was made available for nodes to download, when a block was proposed.',
            },{
                url: 'data-throughput',
                title: 'Data throughput',
                text: 'A measurement of the data capacity of a blockchain. Data throughput is calculated by the amount of data that a blockchain can process, measured in kb/s or mb/s.',
            },{
                url: 'data-withholding-attack',
                title: 'Data withholding attack',
                text: 'A type of attack that occurs when a block producer proposes a new block but does not share the underlying transaction data that was used to create the block.',
            },{
                url: 'dispute-resolution',
                title: 'Dispute resolution',
                text: 'The handling and resolution of disputes, commonly used as a term in relation to optimistic rollups and their fraud proof mechanism.',
            }
        ]
    },{
        'E':[
            {
                url: 'execution-environment',
                title: 'Execution environment',
                text: 'The virtual environment within a blockchain where transactions are processed, and accounts and smart contracts live.',
            }
        ]
    },{
        'F':[
            {
                url: 'fee-market',
                title: 'Fee market',
                text: 'A type of market that blockchains implement to prevent malicious actors from spamming the network.',
            },{
                url: 'fork',
                title: 'Fork',
                text: 'A software upgrade that causes the blockchain to split into two chains that may or may not be compatible with each other.',
            },{
                url: 'fork-choice-rule',
                title: 'Fork choice rule',
                text: 'An algorithm that nodes use to correctly identify and follow the canonical chain.',
            },{
                url: 'full-node',
                title: 'Full node',
                text: 'A type of node that fully verifies a blockchain.',
            }
        ]
    },{
        'H':[
            {
                url: 'honest-majority-assumption',
                title: 'Honest majority assumption',
                text: 'The assumption that a majority of blockchain participants (such as the validator set) are honest and follow the rules of the protocol.',
            },{
                url: 'honest-minority-assumption',
                title: 'Honest minority assumption',
                text: 'The assumption that only a minority of blockchain participants are honest and follow the rules of the protocol.',
            }
        ]
    },{
        'I':[
            {
                url: 'inter-cluster-communication',
                title: 'Inter-cluster communication',
                text: 'Communication that occurs between blockchains that are in different clusters.',
            }
        ]
    },{
        'L':[
            {
                url: 'light-client',
                title: 'Light client',
                text: 'A type of node that only downloads and verifies block headers, relying on an honest majority assumption that the state of the chain indicated by the block header is valid.',
            }
        ]
    },{
        'M':[
            {
                url: 'modular-blockchain',
                title: 'Modular blockchain',
                text: 'A type of blockchain that specializes in only a few functions, rather than all of them.',
            }
        ]
    },{
        'O':[
            {
                url: 'optimistic-rollup',
                title: 'Optimistic rollup',
                text: 'A type of rollup that posts its blocks to a separate chain without any cryptographic proofs that attest to their validity.',
            }
        ]
    },{
        'P':[
            {
                url: 'peer-to-peer-network',
                title: 'Peer to peer network',
                text: 'A network in which nodes are connected and can communicate directly with each other without reliance on a third party to facilitate communication.',
            }
        ]
    },{
        'R':[
            {
                url: 'rollup',
                title: 'Rollup',
                text: 'A type of blockchain that posts their blocks to a separate chain to receive consensus and ensure data availability.',
            }
        ]
    },{
        'S':[
            {
                url: 'sharding',
                title: 'Sharding',
                text: 'The process of separating a blockchain from a single chain into multiple chains (shards).',
            },{
                url: 'shared-security',
                title: 'Shared security',
                text: 'Security that a blockchain inherits from an external source.',
            },{
                url: 'slashing',
                title: 'Slashing',
                text: 'A mechanism employed in PoS blockchains that is used to deter and punish malicious behavior.',
            },{
                url: 'social-consensus',
                title: 'Social consensus',
                text: 'The process by which individuals come to an agreement on a change that will be made to a blockchain.',
            },{
                url: 'sovereign-application',
                title: 'Sovereign application',
                text: 'An application that is deployed on its own sovereign blockchain.',
            },{
                url: 'sovereign-blockchain',
                title: 'Sovereign blockchain',
                text: 'A blockchain that has independent control over itself and its applications via social consensus.',
            },,{
                url: 'sovereign-rollup',
                title: 'Sovereign rollup',
                text: 'A type of rollup that does not use a settlement layer to determine its canonical chain and validity rules.',
            },{
                url: 'state-transition-fraud-proof',
                title: 'State transition fraud proof',
                text: 'A method for proving that a state transition is invalid.',
            },{
                url: 'synchrony-assumption',
                title: 'Synchrony assumption',
                text: 'An assumption that the network is synchronous such that when a message is sent it will be received within a certain amount of time.',
            }
        ]
    },{
        'T':[
            {
                url: 'throughput',
                title: 'Throughput',
                text: 'A measurement of the capacity of a blockchain. Throughput primarily measures two elements: data throughput and transaction throughput.',
            },{
                url: 'the-data-availability-problem',
                title: 'The data availability problem',
                text: 'A problem that is concerned with whether the data in the proposed block can be verified that it is available.',
            },{
                url: 'transaction-throughput',
                title: 'Transaction throughput',
                text: 'The computational capacity of a blockchain. Transaction throughput is commonly calculated by the number of transactions that can be processed per second (TPS).',
            },{
                url: 'trust-minimized-bridge',
                title: 'Trust minimized bridge',
                text: 'A bridge between two blockchains that doesn’t require an intermediary, a committee, or an honest majority assumption to ensure that funds can’t be stolen.',
            },{
                url: 'trusted-bridge',
                title: 'Trusted bridge',
                text: 'A bridge between two blockchains that requires either a trusted intermediary, committee, or an honest majority assumption to ensure that funds can’t be stolen.',
            }
        ]
    },{
        'V':[
            {
                url: 'validator',
                title: 'Validator',
                text: 'A full node that is part of the validator set in a PoS blockchain.',
            },{
                url: 'validator-set',
                title: 'Validator set',
                text: 'A group of validators that are responsible for directly participating in the consensus of a blockchain through either voting, producing, or proposing blocks.',
            },{
                url: 'validity-proof',
                title: 'Validity proof',
                text: 'A type of cryptographic proof that can be used to attest to the validity of a state transition.',
            },{
                url: 'validium',
                title: 'Validium',
                text: 'A type of zero-knowledge rollup that posts its data off-chain rather than to its parent chain.',
            },{
                url: 'volition',
                title: 'Volition',
                text: 'A zero-knowledge rollup with options for both on-chain and off-chain data availability.',
            },{
                url: 'zk-rollup',
                title: 'zk-Rollup',
                text: 'A type of rollup that posts its blocks to a separate chain with a validity proof that attests to the correctness of the block.',
            }
        ]
    }
]
