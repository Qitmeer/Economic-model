# Cryptoeconomics Design Outline for Public Chain （加密经济学设计概要）

## Design Goals（设计目标）

1. A long-term sustainable security network
   
    This is actually two issues: security and Sustainability
        
2. Let different participants achieve the same goal and improve network value.

-------
zh-v:

1. 一个长期可持续的安全网络
  
   这实际上是两个问题：安全性和可持续性
  
2. 让不同的参与者目标一致，从而提高网络价值

## Participants（利益相关方）

- Miners: Predictable revenue
- Developers: Higher-enough security
- Long-term holders: Value embodies, price rises

For short-term arbitrageurs, they are not the object of designers' consideration, because they are only playing a capital game. But this power is useful for project operations.

--------
zh-v:

- 矿工：可预测的收入
- 开发者：足够高的安全性
- 长期持币者：价值体现，价格上升

对于短期套利者，并不是模型设计所考虑的对象，因为他们只是在玩一场资本游戏。但是这股力量对项目运营是有用的。

## Considerations on Macrography（宏观思考点）

### Necessity of Miners（矿工的必要性）

On the one hand, the security of the network comes from the realization of the code level, but on the other hand, it can not be separated from the maintenance of miners. No miners, no validators. In a blockchain network, it is miners who deal with our transactions and ensure the reliability of the transactions, while maintaining the security of the network. Whether POW or POS, miners are indispensable roles. For ERC20 token, this is achieved by ETH network miners.

For this reason, we need some incentive mechanisms to motivate miners.

-------
zh-v:

网络的安全性一方面是来源于代码层面的实现，但另一方面更离不开矿工的维护。没有矿工，将没有人来验证。在一个区块链网络中，是矿工在处理我们的交易并确保了交易的可靠性，同时维护了网络的安全性。无论是 POW 还是 POS，矿工都是不可或缺的。对于ERC20的token，这是依靠ETH网络的矿工来实现的。

出于这样的原因，我们需要一些激励机制来激励矿工工作。

### Sustainability and Predictability of Incentives（激励的可持续性和可预测性）

The greatest value of a public chain network is that it can reach a credible consensus without relying on the middle trusted party, and realize the transfer of trusted information and value transfer on the untrusted channel. The concrete realization is inseparable from the participation of miners. There are some needs:

- Continuous miners need to be involved
- Anyone can participate at any time

Only in this way can the network continue to provide value and keep decentralized. Miners'participation is attracted by predictable revenue, but they can also leave at any time. In order to have a continuous network security, it is necessary to incentive miners continuously.

In Bitcoin network, incentives are divided into two parts: block rewards and transaction fees, which are paying for running the network. In the early stage, funding of network functions may mainly depend on block rewards. In the long run, this would increasingly rely on the transaction fees.
                                                                                       
In Bitcoin's vision, it relies on block rewards and transaction fees to form a long-term sustainable incentives. Block rewards are periodically decreasing, and will keep approaching zero due to the limitation of the total amount. Transaction fees are closely related to the prosperity of the network, which is actually uncertain.

------
zh-v：

一个公链网络最大的价值就是其可以不依赖中间可信方达成可信共识，在不可信信道上实现了传输可信信息、价值转移的问题。而具体的实现是离不开矿工的参与的，这会有一些需求：

- 需要有持续不断的矿工参与进来
- 任何时候任何人都能够参与进来

如此这个网络才能够持续的提供价值并且保持去中心化。矿工的参与是被可预测的收益所吸引的，但是矿工也是随时可以离开的。要想有持续不断的网络安全，就需要对矿工进行持续不断的激励。

在比特币网络中，激励分为两部分：区块奖励和交易手续费，是它们在为网络的运行买单。在早期阶段，网络运营资金可能主要依赖于区块奖励；从长远来看，则会越来越依赖于交易费用。

在比特币的设想中，是依靠区块奖励和交易费用共同形成了一个长期可持续的激励。区块奖励是阶段性递减的，由于总量的限制，会不断接近于零。而交易费用是跟网络的繁荣程度密切相关的，这其实是不确定的。

## Potential Problems in Current Blockchains（当前区块链潜在的问题）

### "Tragedy of the Commons" in the BlockChain（区块链界的“公地悲剧”）

- Storage Tragedy（存储悲剧）

  在区块链上，状态的形成需要节点验证，消耗计算资源，状态的存储则需要节点持续提供存储空间。随着时间的推移，全节点数据会越来越大，存储空间成本逐渐增高。现有的公有链只在处理交易时收取一次性手续费，一旦数据上链成为共同知识，则可以无需再付出任何成本，永久占用所有节点的本地空间。造成“一次付费永久占用” 的区块链公地悲剧。
  
  在以太坊上，很多项目的 ico 数据实际上已经没有太大用处了，但它们仍然一直占据着所有节点的存储空间，而并不会支付任何费用。

- Security Tragedy （安全悲剧）

  The increasing accumulation of storage data will eventually lead to the increasing cost of operation of a full-node, as well as rising the threshold of miners' participation. This will not only hinder the participation of new miners, but also lead to the existing miners leaving the network because of the higher and higher cost,   which will pose a great threat to the decentralization and security of the network.
  
  存储数据的日益积累，终将导致全节点运营成本的不断增加，同时也提高了矿工参与的门槛。这不仅会阻碍新矿工的加入，也会导致已有矿工由于成本越来越高而离开网络，这会对网络的去中心化和安全造成极大的威胁。
   
- 治理悲剧
   
  如果把区块链看做一个公共资源，每个区块只能处理一定数量的交易，所以需要支付一定的手续费。大部分币的持有者肯定希望尽量降低交易手续费，如果按照他们的意愿进行治理，使得手续费不断降低，矿工的收益就会受到影响，最后导致矿工退出网络，因为手续费收益不足以支撑挖矿成本。
  
  - 纯粹的民主会导致公地悲剧，每个人都出于自己的利益进行投票，但是最终有可能损害生态的共同利益，包括他们自己；
  - 创始团队控制是常见的一种治理方式，但这种方式不可持续，创始团队无法保证永久治理，也无法始终代表生态中所有人的利益；
  - 以矿工或代币持有者为主的治理有可能与消费者或其它参与方的利益产生冲突，最终可能会使整个生态走向奔溃；
  - 在区块链部署完成后再增加额外的治理是非常困难的，因为分布式网络中参与方太多，往往无法统一意见；


## Design Considerations（设计上的思考）

### Block reward schedule



### Transaction Fees

