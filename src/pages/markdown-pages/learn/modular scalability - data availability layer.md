---
order: 9
path: "/learn/"
slug: "/learn/modular-scalability/data-availability-and-settlement-layers"
edit: "https://github.com/celestiaorg/celestia.org/blob/main/src/pages/markdown-pages/learn/modular%20scalability%20-%20data%20availability%20layer.md"
date: "2022-03-01"
icon: ""
category: "Intermediate"
subcategory: "Modular scalability"
title: "Data availability and settlement layers"
description: "The scalability properties of modular data availability and settlement layers."
---

<head>
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@CelestiaOrg">
  <meta name="twitter:creator" content="@likebeckett">
  <meta name="twitter:title" content="Scaling data availability and settlement layers">
  <meta name="twitter:description" content="The scalability properties of modular data availability and settlement layers.">
  <meta name="twitter:image" content="https://raw.githubusercontent.com/celestiaorg/celestia.org/main/src/pages/markdown-pages/learn/images/learn-modular-twitter-card.png">
<head/>

#### Data availability layers
By separating consensus and execution, data availability layers can make scalability optimizations without the constraints of also providing settlement layer functionality. 

One of the primary scalability improvements that data availability layers provide is block verification. Since consensus isn't concerned with transaction validity, block verification is reduced to only data availability verification. A key component of this is <a href="https://celestia.org/glossary/data-availability-sampling" target="_blank" rel="noopener noreferrer" style="color:#7B2BF9;">data availability sampling</a>, which allows nodes to verify availability without having to download the entire block. This is done by completing multiple rounds of sampling small random chunks. 

![GATSBY_EMPTY_ALT](./images/article-3-image-1.png)

The implication of data availability sampling on light nodes’ resource requirements is that the number of sampling rounds and size of the chunks remains fixed regardless of the block size, only the header size increases. For example, given a block size of 250kb the overhead would be approximately 2kb, and for a 1000kb block it would be approximately 4kb.

Data availability sampling also minimizes bandwidth cost for light nodes. In a blockchain where the entire block is downloaded to verify data availability, the bandwidth cost for the node is equal to the size of the block. With data availability sampling, the bandwidth cost for a node becomes significantly smaller since only a fraction of the data is required to be downloaded.

For example, given a block size of 1000kb and no data availability sampling, the bandwidth overhead is the entire 1000kb. With data availability sampling, that 1000kb bandwidth overhead reduces to only 33kb.

#### Settlement layers
The current scope of settlement layers has been borne out of necessity for a blockchain to scale using a separate execution layer. However, that situation is imperfect as the now settlement layer is still burdened by applications and their corresponding user-based transaction activity. This results in a settlement layer that is crowded with transactions from both individual users and execution layers.

An optimal settlement layer should have negligible user-based transaction activity, such as only staking and native token transfers. Besides that, there is no additional need for non-execution layer transactions on the settlement layer because it adds extra overhead to the system.

The vast majority of the settlement layers transaction activity should consist of execution layers settling transactions. <a href="https://forum.celestia.org/t/increasing-scalability-of-the-evm-for-rollups-by-restricting-state-and-contract-set/78" target="_blank" rel="noopener noreferrer" style="color:#7B2BF9;">One method</a> of influencing this behavior is to limit smart contracts such that they are only used to interact with execution layers, providing proof verification and bridging tokens. By doing so an environment can be created that is conducive to scaling a settlement layer. Many techniques used to scale execution and data availability layers are also applicable to the settlement layer, including mechanics such as parallel transaction processing, fraud or validity proof, <a href="https://forum.celestia.org/t/the-state-growth-problem-in-a-modular-blockchain-ecosystem/325" target="_blank" rel="noopener noreferrer" style="color:#7B2BF9;">weak statelessness</a>, and <a href="https://forum.celestia.org/t/the-state-growth-problem-in-a-modular-blockchain-ecosystem/325" target="_blank" rel="noopener noreferrer" style="color:#7B2BF9;">history expiry</a>.
