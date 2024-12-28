# Building A dApp Tutorial

## Understanding What A dApp Is

### Why?

Before building anything, we must know why we are investing our time and
attention in it before diving into it.

### What's A dApp Anyway?

A dApp (decentralized application) is an application whose backend logic is
built using smart contracts. Unlike traditional applications, the data in a
dApp are decentralized and immutable. The dApp operates on a blockchain
network.

## Key Components Of A dApp

- Smart Contract
- Blockchain
- Frontend

### Smart Contracts

A smart contract is a program written in Solidity that defines the backend
logic (or business logic) of the decentralized application. Essentially, it
drives how the dApp operates and interacts with the frontend.

### Blockchain

The blockchain network is a distributed ledger of immutable data blocks, called
"nodes," connected in a chain-like fashion where the integrity of any node in
the chain depends on the previous node.

The first blockchain network data structure emerged from Bitcoin technology,
making the Bitcoin blockchain network the first ever blockchain network. In
a blockchain network, there is always a **Genesis Node** created at the
start of the network.

In the Bitcoin network, the entire chain from the genesis node to any node is
known as the **Bitcoin Core** network. Trustworthy miners are incentivized to
maintain the core network, and for every hash they solve, additional
percentages are added to their transaction block as a reward.

Every user on the Web3 infrastructure interacts with the blockchain using a
**Cryptographic Wallet** provided by applications like Metamask. Wallet vendors
like Coinbase or Metamask provide users with four credentials to ensure
**Confidentiality**, **Integrity**, and **Authentication**:

- **Wallet Address:** This is a 24-byte hexadecimal number used to identify a
particular wallet on the network.
- **Public Key:** One half of a cryptographic key-pair, shared with peers or
third-party apps for authorization purposes.
- **Private Key:** The other, more secret half of a cryptographic key-pair,
kept privately to validate the user's identity.
- **12-word phrase:** A mnemonic recovery phrase provided as a backup to
retrieve the wallet in case of password or key loss. This phrase should be
stored securely to prevent unauthorized access.

When a transaction occurs on the Bitcoin blockchain network, the entire network
becomes aware of it. The hash of the last block in the network is generated
from the previous block's hash, ensuring network integrity as no new block can
be added without referencing prior blocks, back to the Genesis block.

Transactions between peers are facilitated by RSA cryptographic key-pairs and a
**Transaction Hash**, which is the hash key of any newly generated block. At
the Genesis block, the transaction hash is manually created by the blockchain's
creator. For new blocks, transaction hashes are generated using the hash of the
previous block, the wallet addresses of the sender and receiver, and their
public RSA cryptographic keys. Once generated, transaction hashes are
immutable (i.e they cannot be changed or "un-generated"), ensuring data integrity.

The most popular blockchain network is Ethereum, which operates similarly to
Bitcoin but introduces **Smart Contracts**. Most dApps are built on Ethereum
because it was the first blockchain to integrate programmable smart contracts,
enabling business logic within the network.

### Frontend

Frontend frameworks and libraries such as React.js and Next.js can build the
client-facing aspect of a dApp, similar to regular apps. For this tutorial, we
will use Next.js because of its powerful features like Server-Side Rendering
(SSR) and API routes.

Server-Side Rendering (SSR) refers to rendering a webpage on the server-side
before sending it to the browser in response to a client's request. This
contrasts with Client-Side Rendering (CSR), where the response includes a "bare
HTML skeleton" with references to CSS and JavaScript files for dynamic content
generation. SSR offers advantages such as faster initial load times and
improved search engine optimization (SEO), as search engines can crawl
fully-formed HTML pages and build indices more efficiently.

## Tools We Will Use

- **Solidity:** For writing smart contracts.
- **Hardhat or Truffle:** Development environment for deploying and testing dApp functionalities.
- **Metamask:** Client-facing app for interacting with the blockchain.
- **Next.js:** Frontend framework for building the dApp's user interface.
- **Infura or Alchemy:** Services to connect the frontend to the Ethereum network without hosting a node.
