title: Economic Model of Qitmeer Test Net   
description: burning HLC, mining pmeer     
Status: v 1.01  

# Economic Model of Qitmeer Test Net

##  Definition

- HalalChain ERC20 token：HLC
- Qitmeer test net token：pmeer
-  Native token of Qitmeer network：Meer 

## Summary

Economic Model of Qitmeer Test Net is a transitional scheme to the main network. On the one hand, at this period, we will introduce real miners' hashrate to test the Qitmeer network. On the other hand, we will complete the transition and mapping from HLC token (also and pmeer) to Qitmeer main network.

During test network, one pmeer minted by miners, correspondingly, one HLC token burnt. The total number of pmeer and HLC remained at 1 billion. The number of pmeer which can be minted will be directly related to the number of HLC token which are burnt. At the end of the test network, the dual-channel mapping of HLC --> Meer and pmeer --> Meer will be established.


## Current Structure of HLC token

HLC token have been allocated via ICO, mainly in the following parts: the market part sold by ICO, development fund and development team award.

- the market part: personal assets that have confirmed ownership,assuming A.

- the development fund: public assets of the chain which will be used for ecological development,assuming B.

- the team award: personal assets that haven’t allocated,assuming C.

The exact number of A, B and C will be announced by HLC foundation, A+B+C=1 billion.

## Modeling Design

### Goals and Rules

The core idea of this model is to attract real miners to test the Qitmeer network, on the other hand, to determine the mapping proportion of the whole Qitmeer network according to the number of HLC token burnt. The final result is obtained by the free game of all parties. The whole process follows the following rules:

- **Burning and mining**: one HLC token burnt, one pmeer can be minted by miners.

- **Constant total number**: the total amount of pmeer and HLC remains at 1 billion, pmeer + HLC = 1 billion.

- **Exchange freely**: pmeer holders and HLC holders can exchange freely on their own initiative.

- **Mapping priority**: the HLC participating in burning will obtain the priority of mapping, it means giving them priority according to its proportion in the network at the time of allocation.

### Modeling 

#### Total Number of pmeer

The total number of pmeers allowed to be minted will be determined by the number of HLCs burnt. It means the real output of pmeer is less than or equal to the number of HLCs burnt.

- Assuming that the number of HLC tokens and pmeers in the market at a certain time is X hundred million and Y hundred million, then X+Y = 10.

- Assuming that the number of HLCs burnt is P hundred million, then the maximum number of pmeer is P hundred million. It means the real output of pmeer is less than or equal to P.

#### Burning of HLC Token

Since the total number of pmeers allowed to be minted will be determined by the number of HLCs burnt, a burning pool will be established. Everyone of HLC holders can participate in HLC burning. All HLC tokens transferred into burning pool during the test period will be directly eligible for the main network mapping, and will be able to obtain priority options and other preferential rights in mapping.

In order to ensure that all users participating in HLC burning can obtain corresponding rights and interests, each user participating in HLC burning will receive a certificate of burning, which can be used to participate in the main network mapping and obtain other preferential rights and interests.

For the convenience of description, we will replace the HLC token to be burnt with B-HLC.

#### Exchange of HLC token and pmeer

PMEER holders and HLC holders can exchange freely on their own initiative. If there is a _β_ satisfying the following conditions:

**1 pmeer = _β_ HLC**.

Among them, _β_ reflects the value inequality of the two. The value of _β_ is calculated by the average value of the final stable state.

#### Mapping Rules

- Determination of the mapping proportion (w) in the whole Qitmeer network

  Assuming that the total number of meers is N hundred million, and the total number of meers that mapped to HLC, pmeer and B-HLC as a whole is N<sub>0</sub> hundred million. So **N<sub>0</sub> = w · N**. 

  The number of B-HLC determines the quantity of pmeer that can be minted at the expense of liquidity, while HLC and pmeer have the potential to profit in the market. Therefore, the value of w is mainly determined by the number of the HLC token to be burnt (i.e. B-HLC), i.e. **w = P/10**.
 
  ![](../image/w.png)
  

- Determination of mapping ratio (f)

  Define mapping ratio f: The number of meers obtained when a single token mapping, i.e. **1 token = f meer**. 
  
  The mapping proportion of HLC, pmeer and B-HLC (HLC to be burnt) in the main network is w, and the corresponding number of meers is N<sub>0</sub>. The P hundred million of HLC that burt will take the priority of P/10 share, and the remaining (1-P/10) share will be shared by HLC and pmeer.
  
  **mapping ratio of B-HLC (f<sub>P</sub>)**:
  
  f<sub>P</sub> = (N<sub>0</sub>*P/10)/P = (w * N * P/10)/P = ((P/10) * N * P/10)/P = PN/100
  
  ![](../image/testnet/f_P.png)
  
  **mapping ratio of HLC (f<sub>X</sub>) and that of pmeer (f<sub>Y</sub>)**:
  
  since 1 pmeer = _β_ HLC, so Y pmeer = _β_ Y HLC. Assuming that the mapping ratio of HLC token is f<sub>X</sub> and that of pmeer is f<sub>Y</sub>, then f<sub>Y</sub>=_β_ f<sub>X</sub>. Therefore:
  
   f<sub>X</sub> = (N<sub>0</sub>*(1-P/10))/(X + _β_ Y) = (w * N * (1-P/10))/(X + _β_ Y) = {(P/10) * N * (1-P/10)}/(X + _β_ Y) = PN(10-P)/(100 (X + _β_ Y))

  ![](../image/testnet/f_X0.png)
  
  since X = 10 - P, so:
  
  ![](../image/testnet/f_X.png) 
  
  and
  
  ![](../image/testnet/f_Y.png)
  
  Since the actual output of pmeer may be less than P, the value of Y is based on the actual output.
  

#### Parameter Setting

- Block rate: close to main network.

- Block reward r: the block reward setting during test network is related to the amount of tokens planned to be issued and the duration of the plan.

  Assuming that the block rate is 30s of each block, and block reward r=500 tokens, then the total output of tokens in one year will be 5.256 hundred million. It would be 1 million 440 thousand in one day.
  
- Difficulty of mining: the initial difficulty of test net mining is based on the participation of ordinary computer, which can be adjusted automatically with the increase of hashrate.

#### Termination Conditions of Test Network

- Time Indicators

- Total Amount Index

- Development Progress of Main Network

- Mining Cost Index (Difficulty Index)


## Version History

- 2019/08/03  v1.01 : initial darft
