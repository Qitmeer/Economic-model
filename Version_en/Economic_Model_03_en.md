# The Economic Model of The Public Chain BlockDAG (scheme 3)

This scheme is an improved version of the second scheme: the HLC token and the HLC foundation remain unchanged, the future public chain of BlockDAG is still a pure public chain, and a complete public chain of miners' interests based on PoW.

The future public chains of BlockDAG still have the following features:

* **Only one stakeholder**: miners, all miners are equal.

* **Zero pre-mining**: the production of each token of the public chain Need to invest hardware and electricity costs from the beginning of the Genesis Block.

* **This will be a pure world-class public chain**.

Compared with scheme 2, this scheme has made some improvements.

* **Adoption of gradual-opening mining strategy**: test network mining and main network mining.

* **Adoption of decreasing-tax in Stage**: taxation is used as the development subsidy and the incentives of early development team (Including other beneficial use of public chain development), tax collection gradually decreases from high to low.

## Gradual-opening mining

The gradual-opening mining strategy can be divided into two stages: the gradual opening mining stage in test network and the comprehensive-opening mining stage on main chain. This paper mainly considers and explains some related matters in the test-mining stage.

Since it is necessary to invest a certain amount of hardware costs and electricity costs even in the test-mining stage. Considering the safety factors and testing purposes, the mining in the earliest stage of the testing network should not be participated by too many people (not open to the outside world). At the same time, as the earlier member of the public chain, test network mining participants will be the first contributors to the security of the public chain network. It is not too much to set up a certain degree of preferential treatment, especially in the early test-minging stage, and nor does it lose fairness.

On the other hand, consider the HLC Foundation and the development team have made great contributions to the early construction of the public chain. On the premise that they can withstand risks and capital investment, they can have a certain priority to participate and enjoy the early preferential treatment in test-mining.

In addition, in order to attract more people to participate in test-mining, and transition to comprehensive opening mining smoothly on the main chain, test-mining can absorb community interest.

Emphasize that the test network mining concessions decrease gradually with the time, within a certain time node (fully open before) adjusted to zero, and normalize the parameters.

In summary, we can divide the test net mining into several stages:

* **Pre-test-mining**: very few participants (HLC Foundation and development team members can participate), very short period of time, mining difficulty is relatively low, during which parameters can be debugged, no obvious bugs into the next stage;

* **Test-mining**: Limited participants,it may be only HLC Foundation and members of development team, etc. Limited time period, it may be in weeks, and should not be too long. Lower difficulty in mining, and have certain advantages in block profit. During this period, we can make necessary parameter debugging. When relatively stable, entering the next stage - semi-open mining.

  At this stage, we can open certain rights to the participation of large HLC holders, as well as some cornerstone investors, who need a certain number of HLC stakes as a threshold, and HLC Foundation can also consider giving a certain staking reward as an incentive.
  
* **Semi-open-mining**: The network is relatively stable and open to the community. Absorbing community participants extensively for stress and difficulty testing.

* **Full-open-mining**: Main chain online, open to global mining.

For the determination of the time period of each stage of test net mining, on the one hand, it should be combined with the development progress and actual needs; on the other hand, it can be combined with Islamic cultural background to endow the time period with cultural connotations.

## Decreasing-tax in Stage

* **Necessity and Limitation of Taxation**

  Considering that the ecosystem of BlockDAG public chain network is relatively weak in the early stage of development, it is necessary and reasonable to extract appropriate proportion of tax revenue from block rewards as the development subsidy for the long-term development and ecological growth of the chain. In addition, as the founder of the chain, BlockDAG public chain development team has made a great contribution to the creation of the chain and should be rewarded for its contribution. The source of this reward can only be the development subsidy.
  
  On the other hand, in the initial stage of network start-up, due to relatively few participants and imperfect ecosystem, we propose to tax for development. However, after the gradual stabilization of the network and the gradual growth of the ecosystem, in view of fairness, there should also be some restrictions on taxation:
  
  Firstly, in order not to affect fairness, the proportion of taxation should not be too high, and the initial reference proportion should be less than 10%.
  
  Secondly, the tax collection period should have a certain upper limit, and should not be an unlimited period of tax collection.
  
  Therefore, we set up a decreasing tax model in stage. The proportion of tax decreases from high to low periodically until it finally reaches zero or keeps a relatively low level.
  
* **The mode of tax revenue decline**

  As for the mode of tax revenue decline, we can reduce the tax level smoothly along with the decrease of block reward. Assuming that the block reward reduction period is T blocks, the time of one block is t, and the scheduled total tax withdrawal period is m, so
  
  **Tax decreasing Number: n = m/(t\*T)**.
  
  Or set the total period of Taxation to M blocks, then
  
  **Tax decreasing Number: n = M/T**
  
  If the initial tax rate is f, then each decline level is Δf = f/n.
  
  In addition, it can also set a special cultural background for the tax reduction period, with the special important period in Islamic culture as the tax reduction period, such as it decrease once after 300 blocks.
  
* **Tax management**

  As a development subsidy fund, the extracted tax is mainly used for the early development of public chain ecological system and the reward for the contribution of early developers. Tax administrators and supervisory committees should be set up to ensure the correct use of tax. Tax administrators and supervisory committee members can come from early development teams and the HLC Foundation.
  
## Suggestion about HLC

As HLC and HLC Foundation remain, the business development and value support of HLC and how to protect the interests of early investors of HLC need to be considered and planned by HLC Foundation.

* **Inviting of cornerstone investors**

  Considering that HLC Foundation can participate in the early test-mining of public chain network and enjoy a preferential treatment, combined with the business direction of HLC Foundation, the interests of cornerstone investors can be protected by the following methods:
  
  * Consider using a part of the HLC Foundation's preferential mining participation in the test network to return the cornerstone investors.
  
  * HLC Foundation can develop mining pool, wallet, exchange, stable currency and other blockchain infrastructure, which can be allocated to cornerstone investors with certain shares.
  
  * HLC Foundation can build a blockchain investment fund, or build blockchain technology business company, develop the public chain business ecosystem, and allocate shares to cornerstone investors.
  
  The above scheme can be implemented independently or in parallel.
  
* **Protection of HLC Token Investors**

  HLC Foundation can develop mining pool, wallet, exchange, stable currency and other blockchain infrastructure, and build its own blockchain industry. HLC Token holders can enjoy the commercial profit share of HLC Foundation.
  
  * Firstly, HLC Foundation participates in preferential test-mining of BlockDAG Public Chain. It can distribute the proceeds from mining to HLC Token non-foundation holders as an early return on investment of HLC. This approach will encourage HLC holders and HLC market.
  
  * Secondly, the HLC Foundation can consider taking part of its business profits as a profits share in periodicity for holding HLC Token. The way of profits share can be air-drop subsidy or buy-back and destroy.
  
  * In addition, the HLC Foundation can consider a staking incentive scheme, according to whether or not to participate staking, as well as the difference of staking period, can obtain different degrees of returns.
  
