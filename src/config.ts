import { createConfig } from "@0xsequence/connect";
import { chainIdFromString, chainIdsFromString } from "./utils/chainIdUtils";

const projectAccessKey = import.meta.env.VITE_PROJECT_ACCESS_KEY;
const walletConnectId = import.meta.env.VITE_WALLET_CONNECT_ID;
const chainIds = chainIdsFromString(import.meta.env.VITE_CHAINS);
const defaultChainId = chainIdFromString(import.meta.env.VITE_DEFAULT_CHAIN);

if (defaultChainId && !chainIds.includes(defaultChainId)) {
  console.warn(
    `Your preferred default chain ${defaultChainId} is not on your l76ist of supported chains (${import.meta.env.VITE_DEFAULT_CHAIN})`,
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const config: any = createConfig("universal", {
  projectAccessKey: projectAccessKey,
  chainIds,
  defaultChainId,
  appName: "Kit Starter",
  walletConnectProjectId: walletConnectId,
});
