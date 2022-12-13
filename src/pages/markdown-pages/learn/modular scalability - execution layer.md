---
order: 7
path: "/learn/"
slug: "/learn/modular-scalability/execution-layers"
edit: "https://github.com/celestiaorg/celestia.org/tree/main/src/pages/markdown-pages/learn/modular-scalability-execution-layers.md"
date: "2022-03-01"
icon: ""
category: "Intermediate"
subcategory: "Modular scalability"
title: "Execution layers"
description: "The scalability properties of different types of modular blockchains."
---

<head>
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@CelestiaOrg">
  <meta name="twitter:creator" content="@likebeckett">
  <meta name="twitter:title" content="Scaling execution layers">
  <meta name="twitter:description" content="The scalability properties of different types of modular execution layers.">
  <meta name="twitter:image" content="https://raw.githubusercontent.com/celestiaorg/celestia.org/main/src/pages/markdown-pages/learn/images/learn-modular-twitter-card.png">
<head/>

#### Summary
1. The two main designs of rollups are optimistic and zk-Rollups. Optimistic rollups provide scalability through data compression and alleviating state growth on the base layer. zk-Rollups scale similarly, as well as through efficient compute verification with validity proofs.
2. Data availability layers scale block verification and minimize bandwidth costs for light nodes. This is possible with <a href="https://celestia.org/glossary/data-availability-sampling/" target="_blank" rel="noopener noreferrer" style="color:#7B2BF9;">data availability sampling</a>, which allows light nodes to verify data availability by only downloading small random samples of a block.
3. Settlement layers can scale using the same techniques from execution and data availability layers. In their current form, settlement layers are not ideal. A more optimal approach would entail creating a chain that limits smart contracts to favor interactions with execution layers.
  
#### Introduction
Monolithic blockchains have pursued varying scalability techniques over time, many of which have proven unsuccessful. Modular blockchains present a way for a monolithic blockchain to be split up among multiple specialized layers. As a result, each layer can implement mechanics for scalability that may have required many tradeoffs in a monolithic architecture.

#### Execution layers
In a modular stack, an execution layer is a type of blockchain that is primarily responsible for executing user-facing transactions. Rollups have emerged as a common type of execution layer used in scaling blockchains. Rollups are themselves a type of blockchain that post their blocks to a base layer to ensure validity and <a href="https://celestia.org/glossary/data-availability" target="_blank" rel="noopener noreferrer" style="color:#7B2BF9;">data availability</a>. Base layer is the term we will use to refer to L1 blockchains that rollups use. Over time, two primary designs have emerged for rollups, optimistic and zk-rollups.

##### Optimistic rollups
<a href="https://celestia.org/glossary/optimistic-rollup/" target="_blank" rel="noopener noreferrer" style="color:#7B2BF9;">Optimistic rollups</a> post their blocks to a base layer, which receives the block and optimistically assumes the transactions are correct.To allow for the rollup blocks to be challenged in the event the block is suspected to be invalid, a <a href="https://celestia.org/glossary/dispute-resolution/" target="_blank" rel="noopener noreferrer" style="color:#7B2BF9;">dispute window</a> is provided for challenges to be made. If a block is challenged, a <a href="https://celestia.org/glossary/data-availability" target="_blank" rel="noopener noreferrer" style="color:#7B2BF9;">fraud proof</a> is used to verify whether it is invalid. Once the dispute window has closed, challenges can’t be made against the block and it is considered final.

![GATSBY_EMPTY_ALT](./images/article-3-image-2.png)

One primary scalability improvement that optimistic rollups provide is moving execution away from the base layer. Once transactions get executed on an optimistc rollup, the base layer need not re-execute them because they automatically are assumed correct. Therefore, the burden of execution is alleviated from the base layer.

A second scalability improvement is alleviating state growth from the base layer. By moving applications and transactions to a different chain, the base layer can reduce the rate at which its state grows. Reducting growth is particularly important as a large state increases hardware requirements for nodes which can negatively affect decentralization. Therefore, reducing state growth is key for sustainable scaling.

##### zk-Rollups
Unlike optimistic rollups, zk-rollups don’t assume that their transactions are correct. With every block that is posted to the base layer a <a href="https://celestia.org/glossary/validity-proof" target="_blank" rel="noopener noreferrer" style="color:#7B2BF9;">validity proof</a> is provided that attests to the correctness of the block. Since transactions are considered final once the validity proof is verified, a dispute window is not required to challenge the rollup block’s validity.

![GATSBY_EMPTY_ALT](./images/article-3-image-3.png)

zk-rollups provide similar scalability benefits to that of Optimistic rollups by alleviating the execution bottleneck and state growth from the base layer. Additionally, zk-rollups also provide scalability for compute verification through the use of validity proofs.

In most blockchains, block producers execute transactions and place them in a block, which is subsequently re-executed by nodes to verify correctness. A validity proof allows nodes to efficiently verify transactions without having to re-execute them - they only verify a single proof.
