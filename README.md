# Building A dApp Tutorial

## Understanding What A dApp Is

### Why?

Before building anything, we must know why we are investing our time and
attention in it before diving into it.

### What's A dApp Anyway?

A dApp (decentralized application) is an application whose backend logic is
built using smart contracts.
Unlike traditional applications, dApp data are decentralized and immutable. The
dApp runs on a blockchain network.

## Key Components Of A dApp

- Smart Contract
- Blockchain
- Frontend

### What're Smart Contracts?

A smart contract is a program written in Solidity which spells
out the backend logic (or business logic) of the decentralized application.
Essentially, it's the driving mechanism of how the dApp operates and influences
the frontend.

### Blockchain

The blockchain network is a network of immutable data blocks called ``nodes``
connected to one another in a chain-like fashion where the integrity of any
node in the chain is determined by the previous node and so on.  

The first blockchain network data structure emerged as a result of bitcoin
technology, hence making the bitcoin blockchain network the first ever
blockchain network to exist. In a blockchain network, there is always a
``Genesis Node`` which is created at the start of the network.  

In the bitcoin network, the entire chain from the genesis node to any node is
known as the ``Bitcoin Core`` network. A handful of trust-worthy miners get
incentives for maintaining the core network and for every hash they are able to
solve, additional percentages are added to their transaction block as reward for
their network being a core.  

When a transaction is to be made on the bitcoin blockchain network, the entire
network becomes aware of this transaction. Because the hash of the last block
in the network was generated from the hash of the previous block, the integrity
of the entire network remains pristine as no new block can be added without the
involvement of the hash from the previous blocks, all the way to the Genesis block.  

Hashes are generated using RSA key-pair cryptography where every user (or
account) has a pair of cryptographic keys known as a public-private key
pair. When there is to be a transaction between 2 users, the 2 users'
public-private key pairs are used in facilitating this transaction. These key
pairs are used in conjuction with the hash from the previous block to generated
something called a ``Transaction Hash`` which is the hash of the newly formed
block. Once this transaction hash is generated, it cannot be "un-generated",
hence the immutability of the data blocks in a blockchain network.  

The most popular blockchain network is the Ethereum blockchain network. The
Ethereum blockchain network works exactly the same as the Bitcoin blockchain
network but with the additional feature known as Smart Contracts. Most dApps
are built on the Ethereum network because the Ethereum blockchain network was
the first blockchain network to implement code in form of smart contracts -
which could factor in business logic - onto the blockchain network - a feature
that was inexistent at the time.

### Frontend

Frontend frameworks and libraries such as React.js, Next.js, and so on can be
utilized to build the client-facing aspect of a dApp just like regular apps.
For this tutorial we would be utilizing Next.js because of powerful features
like Server-Side Rendering (SSR) and API routes.  

Server-Side Rendering (also known as Dynamic Rendering) refers to the feature
where the desired webpage has been rendered on the server-side before it is
sent to the browser as a response to a request made by the client.  

Contrastingly, in traditional Client-Side Rendering (CSR), the response to
requests made by clients is always bare "HTML Skeleton" text file which
contains references (aka hyperlinks) to CSS and Javascript files which the
browser uses to download the stylesheet and script files before executing them.
This is how dynamic HTML content is being generated in CSR.  

Server-Side Rendering gives rise to significant improvements like faster initial 
load time because the server does all the rendering work, and search engine
optimization (SEO) is also achieved because search engines can easily crawl
through fully formed HTML webpages on the server-side as search engine elements
exist primarily on the backend.  

 


