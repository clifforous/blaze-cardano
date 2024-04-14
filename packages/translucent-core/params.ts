import {
  CostModels,
  ExUnits,
  Prices,
  ProtocolVersion,
} from '@cardano-sdk/core/dist/cjs/Cardano'

export interface ProtocolParameters {
  coinsPerUtxoByte: number
  maxTxSize: number
  minFeeCoefficient: number
  minFeeConstant: number
  maxBlockBodySize: number
  maxBlockHeaderSize: number
  stakeKeyDeposit: number
  poolDeposit: number | null
  poolRetirementEpochBound: number
  desiredNumberOfPools: number
  poolInfluence: string
  monetaryExpansion: string
  treasuryExpansion: string
  minPoolCost: number
  protocolVersion: ProtocolVersion
  maxValueSize: number
  collateralPercentage: number
  maxCollateralInputs: number
  costModels: CostModels
  prices: Prices
  maxExecutionUnitsPerTransaction: ExUnits
  maxExecutionUnitsPerBlock: ExUnits
}

export const hardCodedProtocolParams: ProtocolParameters = {
  coinsPerUtxoByte: 4310,
  maxTxSize: 16384,
  minFeeCoefficient: 44,
  minFeeConstant: 155381,
  maxBlockBodySize: 90112,
  maxBlockHeaderSize: 1100,
  stakeKeyDeposit: 2000000,
  poolDeposit: 500000000,
  poolRetirementEpochBound: 18,
  desiredNumberOfPools: 500,
  poolInfluence: '3/10',
  monetaryExpansion: '3/1000',
  treasuryExpansion: '1/5',
  minPoolCost: 170000000,
  protocolVersion: { major: 8, minor: 0 },
  maxValueSize: 5000,
  collateralPercentage: 150/100,
  maxCollateralInputs: 3,
  costModels: new Map()
    .set(0, [
      205665,
      812,
      1,
      1,
      1000,
      571,
      0,
      1,
      1000,
      24177,
      4,
      1,
      1000,
      32,
      117366,
      10475,
      4,
      23000,
      100,
      23000,
      100,
      23000,
      100,
      23000,
      100,
      23000,
      100,
      23000,
      100,
      100,
      100,
      23000,
      100,
      19537,
      32,
      175354,
      32,
      46417,
      4,
      221973,
      511,
      0,
      1,
      89141,
      32,
      497525,
      14068,
      4,
      2,
      196500,
      453240,
      220,
      0,
      1,
      1,
      1000,
      28662,
      4,
      2,
      245000,
      216773,
      62,
      1,
      1060367,
      12586,
      1,
      208512,
      421,
      1,
      187000,
      1000,
      52998,
      1,
      80436,
      32,
      43249,
      32,
      1000,
      32,
      80556,
      1,
      57667,
      4,
      1000,
      10,
      197145,
      156,
      1,
      197145,
      156,
      1,
      204924,
      473,
      1,
      208896,
      511,
      1,
      52467,
      32,
      64832,
      32,
      65493,
      32,
      22558,
      32,
      16563,
      32,
      76511,
      32,
      196500,
      453240,
      220,
      0,
      1,
      1,
      69522,
      11687,
      0,
      1,
      60091,
      32,
      196500,
      453240,
      220,
      0,
      1,
      1,
      196500,
      453240,
      220,
      0,
      1,
      1,
      806990,
      30482,
      4,
      1927926,
      82523,
      4,
      265318,
      0,
      4,
      0,
      85931,
      32,
      205665,
      812,
      1,
      1,
      41182,
      32,
      212342,
      32,
      31220,
      32,
      32696,
      32,
      43357,
      32,
      32247,
      32,
      38314,
      32,
      57996947,
      18975,
      10,
    ])
    .set(1, [
      205665,
      812,
      1,
      1,
      1000,
      571,
      0,
      1,
      1000,
      24177,
      4,
      1,
      1000,
      32,
      117366,
      10475,
      4,
      23000,
      100,
      23000,
      100,
      23000,
      100,
      23000,
      100,
      23000,
      100,
      23000,
      100,
      100,
      100,
      23000,
      100,
      19537,
      32,
      175354,
      32,
      46417,
      4,
      221973,
      511,
      0,
      1,
      89141,
      32,
      497525,
      14068,
      4,
      2,
      196500,
      453240,
      220,
      0,
      1,
      1,
      1000,
      28662,
      4,
      2,
      245000,
      216773,
      62,
      1,
      1060367,
      12586,
      1,
      208512,
      421,
      1,
      187000,
      1000,
      52998,
      1,
      80436,
      32,
      43249,
      32,
      1000,
      32,
      80556,
      1,
      57667,
      4,
      1000,
      10,
      197145,
      156,
      1,
      197145,
      156,
      1,
      204924,
      473,
      1,
      208896,
      511,
      1,
      52467,
      32,
      64832,
      32,
      65493,
      32,
      22558,
      32,
      16563,
      32,
      76511,
      32,
      196500,
      453240,
      220,
      0,
      1,
      1,
      69522,
      11687,
      0,
      1,
      60091,
      32,
      196500,
      453240,
      220,
      0,
      1,
      1,
      196500,
      453240,
      220,
      0,
      1,
      1,
      1159724,
      392670,
      0,
      2,
      806990,
      30482,
      4,
      1927926,
      82523,
      4,
      265318,
      0,
      4,
      0,
      85931,
      32,
      205665,
      812,
      1,
      1,
      41182,
      32,
      212342,
      32,
      31220,
      32,
      32696,
      32,
      43357,
      32,
      32247,
      32,
      38314,
      32,
      35892428,
      10,
      57996947,
      18975,
      10,
      38887044,
      32947,
      10,
    ]),
  prices: { memory: 577/10000, steps: 721/10000 },
  maxExecutionUnitsPerTransaction: { memory: 14000000, steps: 10000000000 },
  maxExecutionUnitsPerBlock: { memory: 62000000, steps: 20000000000 },
}
