---
order: 2
path: "/learn/"
slug: "/learn/basics-of-modular-blockchains/modular-and-monolithic-blockchains"
edit: "https://github.com/celestiaorg/celestia.org/tree/main/src/pages/markdown-pages/learn/basics-of-modular-blockchains-modular-and-monolithic-blockchains.md"
date: "2022-06-01"
icon: ""
category: "Beginner"
subcategory: "Basics of modular blockchains"
title: "Modular and monolithic blockchains"
description: "What are modular blockchains and what makes them different to their monolithic counterparts?"
---

<head>
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@CelestiaOrg">
  <meta name="twitter:creator" content="@likebeckett">
  <meta name="twitter:title" content="Basics of Modular Blockchains">
  <meta name="twitter:description" content="A look at what modular and monolithic blockchains are.">
  <meta name="twitter:image" content="https://raw.githubusercontent.com/celestiaorg/celestia.org/main/src/pages/markdown-pages/learn/images/learn-modular-twitter-card.png">
<head/>

#### Summary
1. A modular blockchain is a type of blockchain that is part of a modular stack. A modular stack consists of layers of specialized blockchains that utilize each other to create a complete system.
2. Monolithic blockchains are limited by handling all functions on a single layer. To increase throughput, security or decentralization must be sacrificed.
3. Modular blockchains provide many benefits over their monolithic counterparts, some of which include efficiently creating new blockchains, sovereignty, and scalability.
  
  
#### Introduction
Blockchain researchers have long grappled with the challenge of creating the optimal system. Many architectures have been tried whose goal was to accommodate all users on a single chain or a tightly coupled group of chains that live under a single network. This approach has proved limited and complex in scaling a system for millions or billions of users. Solutions to this challenge progressed with sharding and layer 2 blockchains to provide additional scale to layer 1. The concept of splitting blockchains up into separate components introduced the idea that a single blockchain doesn’t need to do everything on its own.

The next evolution of that concept is modular blockchains. By making the blockchain modular and splitting up its processes among multiple specialized layers, a more optimal system can be created that is sovereign, scalable, and secure.

#### Modular blockchains
The framework behind modular blockchains is rooted in the principle of modular design, which is the concept of dividing a system into smaller parts that can be independently created or exchanged between different systems.

A modular blockchain is a type of blockchain that specializes in only a few functions, rather than all of them. Because of this, modular blockchains are arranged in a stack that combine to achieve the same functions as a monolithic chain.

##### The functions that modular blockchains can specialize in are:

- Execution: Processes transactions.
- Settlement: Dispute resolution and bridge (optional).
- Consensus: Orders transactions.
- Data availability: Ensures data is available.

While naive implementations of modular stacks were first introduced with rollups, rather than scaling monolithic chains an entirely new stack of purpose-built modular blockchains can be used to take advantage of this new paradigm.

Rollups are a type of modular blockchain that specialize in execution, off-loading settlement, consensus, and <a href="https://celestia.org/glossary/data-availability" target="_blank" rel="noopener noreferrer" style="color:#7B2BF9;">data availability</a> to separate layers. Celestia is another modular blockchain that specializes in consensus and data availability, off-loading execution to separate chains, such as <a href="https://celestia.org/glossary/rollup" target="_blank" rel="noopener noreferrer" style="color:#7B2BF9;">rollups</a>.

![GATSBY_EMPTY_ALT](./images/Celestia_DA_Execution.png)

Celestia is different from previous blockchain designs, which had execution as core functionality. Recognizing that modularity allows blockchains to be created for specific purposes, there is no need for execution because that can be the job of a separate chain. Doing so alleviates the largest bottlenecks associated with a monolithic chain from the base layer: transaction execution and state bloat.

#### Monolithic blockchains
Monolithic blockchains are chains that handle all four functions. Where a modular stack splits up components across multiple layers, monolithic blockchains do everything at the same time on a single layer.

![GATSBY_EMPTY_ALT](./images/Monolithic-Modular_V2_without_logo.png)

##### Some of the constraints that monolithic blockchains face include:

- **High hardware requirements:** Monolithic chains can increase the number of transactions they process, but it comes at a cost. That cost is higher hardware requirements for nodes to verify the chain.
- **Bootstrapping validators:** Deploying a new monolithic blockchain requires the overhead of bootstrapping a secure validator set and maintaining a consensus network.
- **Limited control:** Apps must follow the predetermined rules of the chain they deploy to. This includes the programming model, ability to fork, and community culture, among others.