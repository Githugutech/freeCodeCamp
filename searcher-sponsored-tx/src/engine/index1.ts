import { TransferERC20 } from "./TransferERC20"; // .engine/TransferERC20
import { Base } from "./Base";
import {
    checkSimulation,
    ETHER,
    gasPriceToGwei,
    printTransactions,
} from "./utils";

require("log-timestamp");

const MINER_REWARD_IN_WEI = ETHER.div(1000).mul(22); // 0.022 ETH
const BLOCKS_IN_FUTURE = 2;

const ETHEREUM_RPC_URL = "https://relay.flashboats.net";
const PRIVATE_KEY_ZERO_GAS = process.env.PRIVATE_KEY_ZERO_GAS || "";
const PRIVATE_KEY_DONER = process.env.PRIVATE_KEY_DONER || "";
const FLASHBOTS_SECRET = process.env.FLASHBOTS_SECRET || "";
const RECIPIENT = process.env.RECIPIENT || "";

if (PRIVATE_KEY_ZERO_GAS === "") {
    console.warn(
        "must provide PRIVATE_KEY_ZERO_GAS environment variable, corresponding to ethereum EOA with asset to be transferred"
    );
    
}

