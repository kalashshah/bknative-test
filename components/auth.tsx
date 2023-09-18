import { useConnectWallet } from "@web3-onboard/react";
import { ethers } from "ethers";
import React from "react";

const Auth = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  let ethersProvider;
  if (wallet) {
    ethersProvider = new ethers.providers.Web3Provider(wallet.provider, "any");
  }

  return (
    <>
      <button
        disabled={connecting}
        onClick={() => (wallet ? disconnect(wallet) : connect())}
      >
        {connecting ? "connecting" : wallet ? "disconnect" : "connect"}
      </button>
      <div>The modal should be rendered in the div below this</div>
      <div className="web3-onboard-modal" suppressHydrationWarning></div>
    </>
  );
};

export default Auth;
