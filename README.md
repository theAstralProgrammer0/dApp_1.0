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

### Smart Contracts

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

Every user on the web3 infrastructure can only interact with the blockchain
using what is called a ``Cryptographic Wallet`` made available by applications
like Metamask. Wallet vendors like Coinbase or Metamask provide a user with 4
credentials to ensure ``Confidentiality``, ``Integrity``, and ``Authentication``.

- **Wallet Address:** This is a 24-bit hexadecimal number used to identify a
particular wallet on the network
- **Public Key:** One half of a cryptographic key-pair which can be shared with
peers or 3rd party apps or dApps for authorization purposes.
- **Private Key:** The other more secret half of a cryptographic key-pair which
(as the name suggests) must be kept privately as it is the only other key that
can validate the identity of any user.
- **12 word phrase:** As a backdoor for the user to retrieve their wallet in the
event of loss of passwords or passkeys, a mnemonic set of a dozen words are
also provided as a sort of manual override to signify ownership of any wallet.
This 12 word phrase usually does not make grammatical sense but is meant for
the purpose of protecting wallet owners from outright loss of their wallets
which could be the case if the user does not have the password to their
account. It should be kept safe and hidden from prying eyes to avoid theft of
wallet contents.

When a transaction is to be made on the bitcoin blockchain network, the entire
network becomes aware of this transaction. Due to the fact that the hash of the
last block in the network was generated from the hash of the previous block,
the integrity of the entire network remains pristine as no new block can be 
added without the involvement of the hash from the previous blocks, all the way
to the Genesis block.  

When there is to be a transaction between 2 peers in the network, the 2 peers' 
RSA cryptographic key-pair play salient roles in facilitating the transaction.

The public parts of the key-pairs are used in conjunction with something called 
a ``Transaction Hash`` which is the hash-key of any newly generated block. At the 
Genesis block, the transaction hash is manually created by the creator of the 
blockchain network. For new blocks being added to the chain, novel transaction
hashes are generated using the transaction hash of the previous block, the
wallet address of both the sender and receiver of a commodity (such as bitcoins
or NFTs), and the public RSA cryptographic keys of both the sender and receiver.  
Once this transaction hash is generated, it cannot be "un-generated",
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

## Tools We Will Use 

- Solidity: For writing smart contracts.
- Hardhat or Truffle: This will be our environment for deploying and testing
our dApp's functionalities.
- Metamask: This will be our client-facing app which can interact with the blockchain.
- Next.js: Frontend framework for building dApp UI.
- Infura or Alchemy: For connecting our frontend to the Ethereum network
without us creating our own node.
