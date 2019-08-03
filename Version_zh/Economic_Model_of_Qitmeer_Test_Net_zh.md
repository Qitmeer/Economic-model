title: Qitmeer 测试网经济模型   
description: 销毁HLC，挖出pmeer     
Status: v1.01

# Qitmeer 测试网经济模型   

## 定义

- HalalChain ERC20 代币：HLC
- Qitmeer 测试网代币：pmeer
- Qitmeer 主网本币：meer 

## 概要

Qitmeer 测试网经济模型是一个向Qitmeer主网的过渡模型。一方面，在此期间，我们将引入真实的矿工算力对Qitmeer网络进行测试；另一方面，我们将完成HLC token（以及测试网）向主网的过渡与映射。

在测试网之间，矿工每挖出一个pmeer，需对应销毁一个HLC，pmeer 数量和 HLC 数量总和保持在 10 亿。pmeer 的可挖量将和HLC token的销毁量直接关联。在测试网结束时，建立 HLC --> meer 和 pmeer --> meer 的双通道映射。

## HLC 目前的结构

HLC代币已通过ICO进行了分配，主要包括以下部分：ICO出售的市场部分、发展基金和开发团队奖励。

- 市场部分：属于已确认所有权的个人资产，假设为A。

- 发展基金：用于生态发展的公共资产，假设为B。

- 团队奖励：属于尚未分配的个人资产，假设为C。

A、B和C的确切数字将由HLC基金会公布，A+B+C＝10亿。

## 模型设计

### 目标与规则

该模型设计的核心思想，一方面是要吸引真实矿工算力对Qitmeer网络进行测试，另一方面将根据销毁的 HLC token数量决定整体在Qitmeer主网的映射占比。最终结果由各方自由博弈而得，整个过程遵循以下规则：

 - **销毁与产出**：每销毁一个HLC，相应地才可以产生出一个pmeer，销毁过程公开；
 
 - **总量恒定**：pmeer 和 HLC 的总量保持在10亿，pmeer数量 + HLC数量 = 10亿；
 
 - **兑换自由**：pmeer 持有者和 HLC 持有者在双方自愿的情况下自由交换；
 
 - **映射优先权**：参与销毁的 HLC 将按照其网络比重获得映射的优先选择权。
 
### 建模

#### p-meer总量定义

销毁的HLC token数量将决定 pmeer 可产出上限。意味着 pmeer 的实际产量将小于或等于销毁的 HLC 数量。

- 假定在某一时刻市场中 HLC token 的数量为 X亿，pmeer的数量为 Y亿，则 X+Y=10。

- 假定参与销毁的 HLC token数量为 P 亿，则代表 pmeer 的可产出总量为 P 亿。意味着 pmeer 的实际产出数量小于等于 P。


#### HLC token的销毁

由于 pmeer 的可产出总量将由参与销毁的 HLC 数量决定，我们将建立 HLC token 销毁池，所有的 HLC 持币用户均可参与销毁，所有在测试网期间参与销毁的 HLC token 都将直接获得主网映射资格，并且可以获得在映射时的优先选择权以及其他优惠权益。

为了保证所有参与HLC销毁的用户能获得相应权益，每一个参与销毁HLC的用户都将获得一份销毁证明，可以凭借该凭证参与主网映射以及获取其他优惠权益。

为了描述方便，我们将销毁的 HLC token 用 B-HLC 代替表示。

#### HLC token 和 p-meer 的兑换

pmeer 持有者和 HLC 持有者在双方自愿的情况下自由交换，假如存在一个 _β_ 满足：

**1 pmeer = _β_ HLC**

_β_ 反映了二者的价值不对等性。其中 _β_ 的取值以最终稳定状态下的均值计算。 

#### 映射规则

- 确定在主网的占比（w）

  假设最终在映射时 HLC、pmeer 和 B-HLC 整体对应的主网币（设为 N<sub>0</sub> 亿）占主网总量（设为 N 亿）的比例为 w，则 **w·N = N<sub>0</sub>**。
  
  B-HLC 的数量确定了 pmeer 的可产出数量，牺牲了流通性，而 HLC 和 pmeer 拥有在市场获利的可能，w 的取值由销毁的HLC（B-HLC）数量决定，即 w = P/10，
       
  ![](../image/w.png)


- 映射比（f）的确定

  定义映射比 f：单个token映射时获得 meer 的数量，即 1 token = f meer。
  
  HLC、pmeer 和 B-HLC 整体在主网的占比是 w，对应的 meer 数量是 N<sub>0</sub>, 销毁的 P 亿 HLC 将优先占有 P/10 的份额，剩余的（1 - P/10）的份额由 HLC 和 pmeer 共同分配。
  
  **B-HLC 的映射比（f<sub>P</sub>）**：
  
  f<sub>P</sub> = (N<sub>0</sub>*P/10)/P = (w * N * P/10)/P = ((P/10) * N * P/10)/P = PN/100
  
  ![](../image/testnet/f_P.png)
  
  **HLC 的映射比（f<sub>X</sub>）和 pmeer 的映射比（f<sub>Y</sub>）**：
  
  由于 1 pmeer = _β_ HLC，则 Y pmeer = _β_ Y HLC。假设 HLC token 的映射比为 f<sub>X</sub> ，pmeer的映射比为 f<sub>Y</sub> ，则 f<sub>Y</sub> = _β_ f<sub>X</sub>。因此：
  
  f<sub>X</sub> = (N<sub>0</sub>*(1-P/10))/(X + _β_ Y) = (w * N * (1-P/10))/(X + _β_ Y) = {(P/10) * N * (1-P/10)}/(X + _β_ Y) = PN(10-P)/(100 (X + _β_ Y))
  
  ![](../image/testnet/f_X0.png)
  
  由于 X = 10 - P，故
  
  ![](../image/testnet/f_X.png) 
  
  而
  
  ![](../image/testnet/f_Y.png)

  由于 pmeer 的实际产出数量可能会小于 P，因此 Y 的取值以实际产出量为准。

#### 参数设定

- 出块时间 t：与主网接近

- 区块奖励 r：测试网期间的区块奖励设定，与计划发放的货币量及计划持续时间有关。

  假设出块时间为30s，出块奖励r=500，则一年时间约可产出币量 500*365\*24\*3600/30=5.256亿，每一天产币量为 500\*24\*3600/30 = 144万。
  
  （此参数还有待进一步确定）

- 挖矿难度：测试网挖矿初始难度以普通电脑可以参与为基准，随着算力的增加自动调节。

  
#### 测试网终止条件

  - 时间指标
  - 总量指标
  - 主网开发进度
  - 挖矿成本指标（难度指标）  

## Version History

- 2019/07/30  v1.0 : initial darft
- 2019/08/03  v1.01 :  modify config