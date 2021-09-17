title: Economics of Qitmeer Umayyad Network 【草案】  
Authors：yatingzhou and blocklee and yujie, Qitmeer Economic Team  
Version: 1.4  
September 15th, 2021  

# Economics of Qitmeer Umayyad Network 1.0

## Preface

Qitmeer Network is committed to forming a system for global Inclusion Financial and Ethical Finance by adhering to the financial values of neutrality and universality and the blockchain spirit of equality and openness. The Qitmeer Network is divided into four periods: the Mecca era of awakening and enlightenment, the Medina era of innovation and exploration, the Umayyad era of maturity and stability, and the Abbasid era of prosperity.

The development needs of each period are different and unpredictable, so it is difficult to fully plan in advance. we need to make adjustments in stages by combining the needs and status quo of different periods.The Umayyad era is the period when the main network of Qitmeer is officially launched and the result of the integration of the two value carriers, HLC and Pmeer, into one, symbolizing the maturity and stability of the soul and mind of the Qitmeer Network. During this period, the infrastructure construction will be gradually completed, the establishment of rules and regulations will be started, and the upper ecological construction will be greatly expanded, laying the foundation for the prosperity of the Abbasid era.

In the following, we will discuss the total amount of Qitmeer Umayyad Network base coins, the Genesis and mapping rules of Qitmeer Umayyad Network 1.0, Qitmeer Umayyad Network 1.0 release rules, and "Majority Game Model" design. We will discuss in detail.

## 1. Qitmeer Umayyad Network Base Coin Amount

The Qitmeer Umayyad Network's base coin is named Meer (initial capitalization), and meer (initial lowercase) is also the common unit of count for the base coin, and the smallest unit of count for the base coin is qit, with 1 meer = 100000000 qit. Network's total number of base coins (denoted as N) is set to 210,240,000 meer, i.e., N = 210.4 million meer.

Qitmeer Umayyad Network's base coin can be divided into a Genesis section and a New-minted section. The Genesis section can be divided into a mapping section and a team incentive section. The mapping part involves a set of algorithmic rules and includes the definition and processing of dust accounts; the Genesis part also involves the issue of how to release; and a fun storage incentive mechanism is set for the Qitmeer Umayyad Network coin. Each of them is explained in detail below.

## 2. The Genesis and Mapping Rules of Qitmeer Umayyad Network 1.0

The entry of the Qitmeer Network into the Umayyad era symbolizes the network's maturity and stability, thanks to the foundation laid during the Mecca and Medina eras. Therefore, at the start of the Umayyad Network, a portion of Meer needs to be created first to inherit the values transferred from the Mecca and Medina eras.

Both Mecca-era tokens (HLC) and Medina-era tokens (Pmeer) will be converted into main network tokens (Meer) at a certain ratio. According to the rules of Qitmeer Medina Network Economic-model, the proportion of the whole Medina Network in Qitmeer Network is 20.0287911%, which is a value obtained by democratic decision-making at the beginning of Medina Network. That is to, at the time of the Genesis of Umayyad, 20.0287911% of Meer needs to be created for the HLC and Pmeer mapping. That is, the total amount of Meer used to map HLC and Pmeer is: N<sub>0</sub> = 20.0287911% × 210240000 = 42108530.40864 meer.

In addition, 4% Meer will be created at the same time as an incentive for the Founding team. 

Therefore, the total number of Qitmeer Network Genesis during Umayyad is: N<sub>g</sub> = N<sub>0</sub> + 4%N = 50518130.40864 Meer.

Since there are many abandoned dust accounts(as defined in 2.1.5) for HLC and Pmeer, there is no need to do the mapping, so the actual total amount of Qitmeer Genesis will be rounded to 50518130 meer, which is about 24% of the total number of Qitmeer base coins.

The rules involved in the mapping section and the founding team incentive section are explained below.

### 2.1 Mapping Section

#### 2.1.1 Preface  

**Non-equal weight mapping for HLC and pmeer -- the game parameters β of the two tokens** 

In the Medina era, due to historical reasons, there are two tokens in Qitmeer Network: HLC and Pmeer, which are value carriers of different periods and will eventually be mapped into Meer in Umayyad era after a competition game of the two tokens in Medina era. Because of the difference of their characteristics, the value of individual token is not the same, so HLC and Pmeer are non-equivalent mapping.

After the burnt HLCs (denoted as B-HLCs) are allocated 20.0287911% of the total mapping Genesis in priority, the remaining 79.9712089% will be used to map the unburned HLCs and Pmeer. Since they are non-equivalent mappings, they do not share the 79.9712089% equally, but play a competition game by free market to determine the size of their respective shares. Intuitively, the mapping ratios of individual Token are different, and the mapping ratios of these two Tokens will be affected by the game parameter β. Only when β is equal to 1, their mapping ratio will be equal.

The parameter β is a custom parameter. In the Economic-model of Medina Network, we define the parameters β is the ratio of mapping weights of a single Pmeer to a single HLC. That is, the mapping weight of one Pmeer is equivalent to β HLCs, i.e., 1 Pmeer = β HLC, a value that visually reflects the value inequality between the two.

In this free game between HLC and Pmeer, the number of participating Pmeer is 200287911 and the number of HLC is 349343287 (the total number of remaining HLC is 799712089, of which 450368802 HLC is locked and not in circulation). Their market shares ultimately determine their respective mapping weights, and the value of the parameter β will intuitively reflect this.

The value of the parameter β will be obtained according to the following formula:

![](../image/Umayyad/beta.jpg)

where u and v are the market prices of HLC and Pmeer, respectively; X is the total amount of unburned HLC, i.e., 799.712089 million; C is the total amount of locked HLC, i.e., 450.368802 million. Therefore

![](../image/Umayyad/beta-a.png)

Since the market state at any single moment is not representative of the overall level of the HLC and Pmeer games, we need to average the market data from one game stage to determine the value of β. First, we will determine the average price of HLC and Pmeer based on their daily opening price and closing price. Then, we will determine the final value of β by taking the average of the prices over the statistical period of the game data.

![](../image/Umayyad/game-price-en.png)

We calculated the data for 90 days of the game period and came up with the final results: the average price of HLC is about 0.00661214 USDT, the average price of Pmeer is about 0.01850104 USDT, and the final value of β is 6.40471626.

#### 2.1.2 the mapping ratio of burnt HLC(B-HLC)

In the development history of Qitmeer, the Medina era is an important transition from the spiritual awakening of blockchain to the gradual maturity of Qitmeer, and an important process for Qitmeer to become a public chain with independent standards. The burning of HLC token is an important symbol and preparation for the opening of Medina Network, which is also the first major democratic decision made by users of Qitmeer Network. It determines the upper limit of the total output available for PoW mining on Medina Network and the proportion of the whole Medina Network in Qitmeer Network.

In this burning event, HLC token holders have burnt a total of 200287911 HLC tokens, accounting for 20.0287911%. Therefore, according to the Economic Model of the Medina Network, the burnt HLC (B-HLC) can be prioritized to determine the mapping ratio, and 20.0287911% of the total amount of Mapping Genesis will be prioritized to allocate to B-HLC for redemption to compensate for their contribution to the Medina Network by actively giving up their liquidity.

Therefore, the total mapping amount of these 200287911 B-HLCs in the Umayyad Network is 20.0287911% N<sub>0</sub>, which is about 8433829.59082648 meer. Correspondingly, the mapping ratio of a single Token is f<sub>P</sub> = 0.04210853, i.e., one B-HLC can be redeemed for 0.04210853 meer.


#### 2.1.3 the mapping ratio of HLC(unburned)

HLC and Pmeer, as value carriers in Mecca era and Medina era respectively, coexist in Medina era and there is a free competitive game between them and they will be mapped into Umayyad Network simultaneously at the end of Medina era. Since they are different value carriers, they cannot be treated as equivalent, and in the allocation of the mapping, they will determine the weights of the allocation through a free market game.

Based on the principle that the total number of the Tokens is constant in Qitmeer Medina Network, the maximum amount of Pmeer output of Medina Network is determined by the total amount of HLC burned. Before the Medina Network was launched, a total of 200.287911 million HLCs were burned, so the total amount of Pmeer is 200.287911 million, while the total amount of remaining unburned HLCs is 799.712089 million.

After 20.0287911% of the total number of Mapping Genesis is preferentially allocated to  B-HLC(burned HLC) for mapping, the remaining 79.9712089% will be used for the mapping of HLC and Pmeer, i.e. the total conversion number of both to Meer is 79.9712089% N<sub>0</sub> ≈ 33674700 meer. The mapping ratio of the two will be finalized with the determination of the game parameter β.

The calculation formula of HLC mapping ratio f<sub>X</sub> is as follows:

![](../image/Umayyad/fx.png)

i.e., one HLC can be redeemed for 0.01617033 meer. Where P is the total amount of HLC burned and N is the total amount of base coin in the Qitmeer main network.

#### 2.1.4 the mapping ratio of  Pmeer

The calculation formula of Pmeer mapping ratio f<sub>Y</sub> is as follows:

![](../image/Umayyad/fy.png)

i.e., one Pmeer can be redeemed for 0.10356637 meer.

#### 2.1.5 dust account

Considering that there are some accounts in HLC and Pmeer networks with very small balances generated by testing, which have become abandoned accounts due to their very small balances, we call such accounts dust accounts. For the dust accounts, because their balance is too small, the balance after mapping is also basically negligible, and most of these accounts are abandoned, it is meaningless to do mapping for them, which will only consume network resources for nothing. Therefore, instead of mapping the dust accounts, the dust balances will be grouped together in the network Eco-fund.

- 2.1.5.1 HLC dust account definition

Currently, HLC has 1913 holding addresses on-chain, of which the balance of the latter 913 addresses are less than or equal to 50HLC. Among all the holding addresses, there are 679 addresses whose balance is equal to 50hlc, and 38 addresses whose balance is greater than or equal to 5 but less than 50hlc; There are 3 addresses whose balance is equal to 5 and 224 addresses whose balance is less than 5; 210 addresses with balance less than or equal to 1 ([Data source](https://www.oklink.com/eth/token/0x58c69ed6cd6887c0225d1fccecc055127843c69b)).

Since there are a total of 224 addresses with address balance less than 5 HLC, but there are 210 addresses with balance less than or equal to 1. The swapping amount of 5 HLC after mapping is also about 0.1 meer. Comprehensive energy efficiency ratio, we propose to define the HLC accounts with account balance less than 5 as dust accounts, i.e., **the criterion of HLC dust accounts is set as HLC < 5**.

- 2.1.5.2 Pmeer dust account definition

There are many Pmeer accounts with very small balances. Out of a total of 3500 addresses, there are 1696 addresses with balance less than 1 Pmeer. Among them, there are 380 addresses with balance greater than or equal to 0.1 and less than 1 Pmeer; 1318 addresses with balance less than 0.1 Pmeer; 1044 addresses with balance less than 0.01 Pmeer, and 652 addresses with balance greater than or equal to 0.01 and less than 1 Pmeer. ([Data source](https://explorer.qitmeer.io/))

Among the 1,696 accounts with address balance less than 1Pmeer, there are some accounts with balance of 0.1 or 0.0999, which are mining addresses that have participated in mining pool mining, but have not continued mining due to too little hashrate, and there is only one transaction from miner in the account. These accounts are likely to become abandoned accounts as well. In addition, there are many accounts with even smaller balances, most of which were generated for testing purposes and have become abandoned accounts. Even if these accounts are mapped, most of them will have a balance of less than 0.01 after mapping.

Comprehensive energy efficiency ratio, we classify accounts with Pmeer balances less than 1 as dust accounts, i.e., **the criterion of Pmeer dust accounts is set as Pmeer < 1**.

In short, addresses with account balances less than 5 HLC or less than 1 pmeer will be defined as dust accounts and will not be mapped. The dust balance will be grouped into the network Eco-fund.

(_Note: the above statistics may change somewhat depending on the point in time, but the statistics on tiny accounts will not be affected_)

### 2.2 Founding Team Incentive 

At the Genesis of Umayyad 1.0 network, 4% of the total number of Meer will be created at the same time as an incentive for the founding team, totaling 8409600 meer. The team incentive part is not a one-time payment and follows the same release rules as the mapping part.


## 3. Qitmeer Umayyad Network 1.0 Release Rules

### 3.1 Release Amount

At the initial stage of the Umayyad network launch, a one-time Genesis generation of about 24% of Meer will be used mainly for mapping redemption for Mecca and Medina network holders, and team incentives. Since Qitmeer is a PoW-based consensus network and the Umayyad network uses a new ASIC-friendly mining algorithm, we need to mitigate the one-time impact of this 24% Genesis volume on the market in order to ensure the stable growth of miners, considering the stability of the Umayyad network, so we will adopt a linear release process for this part of the Genesis balance. The maximum amount of linear release is 50518130 meer.

### 3.2 Release Rate

First of all, for all accounts requiring linear release, the release rate will remain at a total release of about 28,800 meer per 2,880 main heights, which is similar to the total output of PoW per 2,880 main heights. If the main network concurrency rate is low, the annual release would be about 20.81% of the total Genesis volume.Individual address will be released linearly on a pro-rata basis every day with such a release cycle.

### 3.3 Small Accounts

Secondly, due to the high number of releases in linear release, from the perspective of cost control, small Meer accounts with small account balances will not be involved in linear release and will be released in a one-time manner. **For accounts with the number of Meer <1000, we define them as small accounts, and small accounts do not participate in linear release.**


This release scheme is the temporary release scheme of Qitmeer Umayad 1.0. Later, according to the actual situation of Umayyad Network development, the release rules will be adjusted before Qitmeer Umayyad 2.0 network is launched, taking into account the user requirements and network conditions.

## 4. Qitmeer Umayyad Network 1.0 "Majority Game Model" Design




