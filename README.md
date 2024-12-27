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

A smart contract is a program written in Solidity. It is the code which spells
out the backend logic (or business logic) of the decentralized application.
Essentially, it's the driving mechanism of how the dApp operates and influences the frontend.

### Blockchain

The blockchain network is a network of immutable data blocks called ``nodes``
connected to one another in a chain-like fashion where the integrity of any
node in the chain is determined by the previous node and so on. 
The first blockchain network data structure emerged as a result of bitcoin
technology.Hence making the bitcoin blockchain network the first ever
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
involvement of the hash from the previous blocks. 
Hashes are generated using RSA key-pair cryptography where every user (or
account) has a pair of cryptographic keys known as a public-private key
pair. When there is to be a transaction between 2 users, the 2 users'
public-private key pairs are used in facilitating this transaction. These key
pairs are used in conjuction with the hash from the previous block to generated
something called a ``Transaction Hash`` which is the hash of the newly formed
block. Once this transaction hash is generated, it cannot be "un-generated",
hence the immutability of the data blocks in a blockchain network.
The most popular blockchain network
