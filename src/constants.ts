import { BigNumber } from '0x.js';

export const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
export const NULL_BYTES = '0x';
export const ZRX_DECIMALS = 18;
export const DEFAULT_PAGE = 1;
export const DEFAULT_PER_PAGE = 20;
export const ZERO = new BigNumber(0);
export const MAX_TOKEN_SUPPLY_POSSIBLE = new BigNumber(2).pow(256); // tslint:disable-line custom-no-magic-numbers
export const DEFAULT_LOCAL_POSTGRES_URI = 'postgresql://api:api@localhost/api';
export const ONE_SECOND_MS = 1000;
// tslint:disable-next-line:custom-no-magic-numbers
export const ONE_MINUTE_MS = ONE_SECOND_MS * 60;
// tslint:disable-next-line:custom-no-magic-numbers
export const TEN_MINUTES_MS = ONE_MINUTE_MS * 10;

// API namespaces
export const SRA_PATH = '/sra';
export const STAKING_PATH = '/staking';
export const META_TRANSACTION_PATH = '/meta';
