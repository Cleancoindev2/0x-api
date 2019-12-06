import { NULL_ADDRESS } from '../constants';
import { TokenMetadatasForNetworks } from '../token_metadatas_for_networks';
import { Network, TokenMetadata } from '../types';

/**
 * Returns a TokenMetadata instance, given a token address and the network that the token is deployed on.
 *
 * @param tokenAddress the address of an ERC20 token
 * @param network the Network ID
 */
export function getTokenMetadataOrThrow(tokenAddress: string, network: Network): TokenMetadata {
    const foundMetadataInfo = TokenMetadatasForNetworks.find(m => {
        return m.tokenAddresses[network].toLowerCase() === tokenAddress.toLowerCase();
    });

    if (foundMetadataInfo) {
        return {
            symbol: foundMetadataInfo.symbol,
            decimals: foundMetadataInfo.decimals,
            tokenAddress: foundMetadataInfo.tokenAddresses[network],
        };
    }

    throw new Error(`Can't find metadata for ${tokenAddress} on network ${network}`);
}

/**
 * Returns the address of a token.
 *
 * @param symbol the uppercase symbol of the token (ex. `REP`)
 * @param network the Network where the address should be hosted on.
 */
export function findTokenAddress(symbol: string, network: Network): string {
    const entry = TokenMetadatasForNetworks.find(tm => tm.symbol === symbol);
    if (!entry) {
        throw new Error(`Could not find token ${symbol}`);
    }
    const tokenAddress: string | undefined = entry.tokenAddresses[network];
    if (!tokenAddress || tokenAddress === NULL_ADDRESS) {
        throw new Error(`Token ${symbol} entry was found, but no valid address was specified`);
    }
    return tokenAddress;
}
