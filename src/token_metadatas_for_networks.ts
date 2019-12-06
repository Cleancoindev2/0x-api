import { NULL_ADDRESS } from './constants';
import { Network } from './types';

export interface TokenMetadataAndNetworkAddresses {
    symbol: string;
    decimals: number;
    tokenAddresses: {
        [Network.Mainnet]: string;
        [Network.Kovan]: string;
        [Network.Ganache]: string;
    };
}

export const TokenMetadatasForNetworks: TokenMetadataAndNetworkAddresses[] = [
    {
        symbol: 'DAI',
        decimals: 18,
        tokenAddresses: {
            1: '0x6b175474e89094c44da98b954eedeac495271d0f',
            42: '0xc4375b7de8af5a38a93548eb8453a498222c4ff2',
            50: NULL_ADDRESS, // TODO: get version of ganache snapshot with a dummy DAI preloaded (https://app.asana.com/0/1111360282500509/1119309058198204/f)
        },
    },
    {
        symbol: 'REP',
        decimals: 18,
        tokenAddresses: {
            1: '0x1985365e9f78359a9B6AD760e32412f4a445E862',
            42: '0xb18845c260f680d5b9d84649638813e342e4f8c9',
            50: '0x34d402f14d58e001d8efbe6585051bf9706aa064',
        },
    },
    {
        symbol: 'WETH',
        decimals: 18,
        tokenAddresses: {
            1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            42: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
            50: '0x0b1ba0af832d7c05fd64161e0db78e85978e8082',
        },
    },
    {
        symbol: 'ZRX',
        decimals: 18,
        tokenAddresses: {
            1: NULL_ADDRESS,
            42: '0x2002d3812f58e35f0ea1ffbf80a75a38c32175fa',
            50: '0x871dd7c2b4b25e1aa18728e9d5f2af4c4e431f5c',
        },
    },
    {
        symbol: 'USDC',
        decimals: 6,
        tokenAddresses: {
            1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            42: NULL_ADDRESS, // TODO: Find mintable 6-decimal precision token on Kovan (https://app.asana.com/0/1111360282500509/1119762521048765)
            50: NULL_ADDRESS, // TODO: get version of ganache snapshot with a dummy USDC preloaded (https://app.asana.com/0/1111360282500509/1119309058198204/f)
        },
    },
    {
        symbol: 'BAT',
        decimals: 18,
        tokenAddresses: {
            1: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
            42: NULL_ADDRESS,
            50: NULL_ADDRESS,
        },
    },
    {
        symbol: 'MKR',
        decimals: 18,
        tokenAddresses: {
            1: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
            42: NULL_ADDRESS,
            50: NULL_ADDRESS,
        },
    },
];
