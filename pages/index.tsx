import { init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import dynamic from "next/dynamic";

const Auth = dynamic(() => import("../components/auth"), { ssr: false });

const injected = injectedModule();

init({
  wallets: [injected],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
    },
    {
      id: "0x2105",
      token: "ETH",
      label: "Base",
      rpcUrl: "https://mainnet.base.org",
    },
  ],
  containerElements: {
    connectModal: ".web3-onboard-modal",
  },
});

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <Auth />
    </div>
  );
}
