import { run, network } from "hardhat";

// async main()
async function main(): Promise<void> {
  const tokenSwapFactory = await run("ethers:getContractFactory", "AtomicSwapERC20");
  console.log("Deploying the contract, please wait .......");
  const tokenSwap = await tokenSwapFactory.deploy();
  await tokenSwap.deployed();
  console.log(`Deployed contract to ${tokenSwap.address}`);

  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    await tokenSwap.deployTransaction.wait(6);
    await verify(tokenSwap.address, []);
  }
}

async function verify(contractAddress: string, args: any[]): Promise<void> {
  console.log("Verifying Contract is in progress, please wait ......");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e: any) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!");
    } else {
      console.log(e);
    }
  }
}

// calling the main function
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });