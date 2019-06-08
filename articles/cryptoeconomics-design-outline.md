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

### MoE or SoV？（是做交换媒介？还是价值储存？）

- MoE: Medium of Exchange
- SoV: Store of Value


## Potential Problems in Current Blockchains（当前区块链潜在的问题）

### "Tragedy of the Commons" in the BlockChain（区块链界的“公地悲剧”）

- Storage Tragedy（存储悲剧）

  In block chains, the formation of state requires node validation, which consumes computing resources, and the storage of state requires that the node continuously provide storage space. The data of a full node will become larger and larger over time, and the cost of storage space will gradually increase. Existing public chains only charge a one-time fee when dealing with transactions. Once data become common knowledge on blockchain, they will occupy the local space of full nodes permanently without any cost. This leads to the tragedy of Commons of "one-time payment and permanent occupancy" in blockchains.
  
  In ETH network, ICO data for many projects is virtually useless, but they still occupy the storage space of full nodes without paying any fees.
  
  在区块链上，状态的形成需要节点验证，消耗计算资源，状态的存储则需要节点持续提供存储空间。随着时间的推移，全节点数据会越来越大，存储空间成本逐渐增高。现有的公有链只在处理交易时收取一次性手续费，一旦数据上链成为共同知识，则可以无需再付出任何成本，永久占用所有节点的本地空间。造成“一次付费永久占用” 的区块链公地悲剧。
  
  在以太坊上，很多项目的 ico 数据实际上已经没有太大用处了，但它们仍然一直占据着所有节点的存储空间，而并不会支付任何费用。

- Security Tragedy （安全悲剧）

  The increasing accumulation of storage data will eventually lead to the increasing cost of operation of a full-node, as well as rising the threshold of miners' participation. This will not only hinder the participation of new miners, but also lead to the existing miners leaving the network because of the higher and higher cost,   which will pose a great threat to the decentralization and security of the network.
  
  存储数据的日益积累，终将导致全节点运营成本的不断增加，同时也提高了矿工参与的门槛。这不仅会阻碍新矿工的加入，也会导致已有矿工由于成本越来越高而离开网络，这会对网络的去中心化和安全造成极大的威胁。
   
- Governance Tragedy（治理悲剧）
   
  如果把区块链看做一个公共资源，每个区块只能处理一定数量的交易，所以需要支付一定的手续费。大部分币的持有者肯定希望尽量降低交易手续费，如果按照他们的意愿进行治理，使得手续费不断降低，矿工的收益就会受到影响，最后导致矿工退出网络，因为手续费收益不足以支撑挖矿成本。
  
  Whether it is the BIP signal system of Bitcoin, or the voting governance of ETH miners, or the governance of dBFT consensus mechanism, it is exploring a decentralized network governance mode. Some problems are summarized in the exploration：
  无论是比特币BIP信号系统、以太坊矿工投票治理、还是dBFT共识机制的治理等，都是在探索一个去中心化的网络的治理方式。在探索中总结出了一些问题：
  
  - 纯粹的民主会导致公地悲剧，每个人都出于自己的利益进行投票，但是最终有可能损害生态的共同利益，包括他们自己；
  - 创始团队控制是常见的一种治理方式，但这种方式不可持续，创始团队无法保证永久治理，也无法始终代表生态中所有人的利益；
  - 以矿工或代币持有者为主的治理有可能与消费者或其它参与方的利益产生冲突，最终可能会使整个生态走向崩溃；
  - 在区块链部署完成后再增加额外的治理是非常困难的，因为分布式网络中参与方太多，往往无法统一意见；

### Potential Incentive Incompatibility（激励的潜在不相容）

In the current block chain design, the vitality of the network mainly depends on block rewards and transaction fees. However, due to the limitation of total amount, when there is no newly-minted tokens as incentives, the operation of the network will mainly depend on transaction fees. Whether transaction fees can bear the incentive function of the network and continue the sustainability of incentives entirely depends on the prosperity of the network, which is an unpredictable result.

[Carlsten et al.][Carlsten] show that in the absence of inflation, rational Bitcoin miners are no longer incentivized to mine on the longest chain.

![](/image/Figure-1.png)

When choosing between forks, miners are incentivized to adopt one with fewer transactions in the final block, since such forks leave more transaction fees for the next miner. By exploiting this observation, selfish miners can convince other miners to build on side chains. This is the incentive incompatibility result from current fee mechanism.

-------
zh-v：

在当前的区块链设计中，网络的生命力主要依赖于区块奖励和交易手续费的激励，但是由于总量的限制，在没有新币做奖励时，网络的运行将主要依赖于交易手续费。而交易手续费能否承担起网络的激励功能，延续激励的可持续性，完全取决于网络的繁荣程度，而这却是一个不可预测的结果。

完全依靠交易手续费作为激励的网络会存在一个潜在的威胁：激励不相容。Carlsten等人表明在没有通货膨胀的情况下，理性的比特币矿商不再被激励在最长的链上开采。

![](/image/Figure-1.png)

当需要在分叉之间做出选择时，矿工会被激励去采用最终区块中包含了更少的交易的分叉，因为这样的分叉会留取更多的交易费用给下一个矿工。利用这样的论断，自私挖矿者可以说服其他矿工建立侧链。这便是现行收费机制导致的激励不相容性。

[Carlsten]: http://randomwalker.info/publications/mining_CCS.pdf

### 

## Design Considerations（设计上的思考）

All the considerations are embodied in a block reward schedule and transaction fee setting.

所有的考虑落到实处就是一份区块奖励计划和交易手续费的设定。

### Block reward schedule (区块奖励计划)

A block reward schedule is essentially a mintage plan, which provide predicable incentive for miners, and usually set as a function of token quantity decay. This schedule involves the following considerations:

- **The total amount of tokens**: The upper limit of tokens available by mining, which is 21 million in Bitcoin.

- **Block reward**: The number of tokens rewarded to miners in a single block, which is the motive power for miners to participate in network operation. Currently, the common practice is that keeping a relatively high level rate of block rewards at the launch of the network, and decays over time as the network matures. This also reflects the degree of token inflation during the reward period.

- **Initial Block Reward**: A starting point of block reward changes.

- **Block era**: Block era is a time period that reflects the period of block reward changes which is usually a decay period. For example, it is 210000 blocks in Bitcoin, approximately four years.

- **Block rate**: This is an average time period which reflects the time to generate a single new block. Block rate is not fixed at all times. It will be delayed or shortened with the change of the whole network hash power. It is controlled by periodic adjustment of mining difficulty to stabilize its mean value.

- **Difficulty period**: The time period of the adjustment of mining difficulty, controlling the stability of block rate.

- **Initial mining difficulty**: The difficulty set to ensure the initial stability of block rate, according to the initial expected hash power of the network.

These factors combined affect the token supply, including the total supply period and the level of periodic inflation.

In addition, it is worth noting that the selection of block rewards will directly affect the equitability of allocation, especially in PoS system. At a high level, equitability means that a party that begins with a certain fraction of stake cannot unduly amplify its fraction of stake simply by participating in block proposal or validation. 

-----
zh-v:

一份区块奖励计划本质上是一个铸币计划，为矿工提供了可预测的激励，通常被设定为一个代币数量衰减的函数。这份计划涉及了以下一些考虑因素：

- **代币总量**：可供挖出的代币上限，这在比特币中是 2100 万。

- **区块奖励**：奖励给矿工的单个区块的代币数量，这是矿工参与网络运行的动力。目前，常见的做法是在网络启动初期保持一个相对较高的区块奖励水平，然后随着网络的稳定而衰减。这也反映了在奖励周期内的代币通胀程度。

- **初始区块奖励**：一个区块奖励发生变化的起点。

- **区块纪元**：区块纪元是一个反映了区块奖励变化周期的时间阶段，这通常是一个衰减周期。例如，在比特币中这个值是 210000 个区块，大约是四年。

- **出块速率**：这是一个平均时间，反映了单个新区块产生的时间。出块时间并不是每时每刻都固定不变的，会随着全网算力的变化而延迟或者缩短，是通过周期性的难度调节来控制其均值稳定的。

- **难度周期**：挖矿难度调节的时间周期，控制着出块时间的稳定。

- **初始挖矿难度**：为了确保出块时间的最初稳定，根据网络初始预期算力所做的难度设定。

以上的这些因素综合影响了代币供应，包括总的供应周期，阶段性通胀水平。

另外，值得注意的是区块奖励的选择会直接影响分配的均衡性，特别是在 PoS 系统中。在高层次上，均衡性意味着以某一权益比例开始的一方不能仅仅通过参与出块或验证而过度扩大其权益比例。

### Transaction Fees


## ICO 的本质