import { expect } from "chai";
import { ethers } from "hardhat";
import { ContractFactory, Signer } from "ethers";
import { AtomicSwapERC20, TokenA, TokenB } from "../typechain";

describe("AtomicSwapERC20", function () {
  let TokenA: ContractFactory, TokenB: ContractFactory, AtomicSwapERC20: ContractFactory;
  let tokenA: TokenA, tokenB: TokenB, atomicSwap: AtomicSwapERC20;
  let owner: Signer, trader1: Signer, trader2: Signer;

  beforeEach(async () => {
    TokenA = await ethers.getContractFactory("TokenA");
    TokenB = await ethers.getContractFactory("TokenB");
    AtomicSwapERC20 = await ethers.getContractFactory("AtomicSwapERC20");

    [owner, trader1, trader2] = await ethers.getSigners();

    tokenA = (await TokenA.deploy()) as TokenA;
    tokenB = (await TokenB.deploy()) as TokenB;
    atomicSwap = (await AtomicSwapERC20.deploy()) as AtomicSwapERC20;

    await tokenA.mint(trader1.address, ethers.utils.parseUnits("1000", 18));
    await tokenB.mint(trader2.address, ethers.utils.parseUnits("2000", 18));
  });

  describe("open", function () {
    it("should open a new swap", async () => {
      const swapId = 1;
      const amountDT = ethers.utils.parseUnits("100", 18);
      const amountWDT = ethers.utils.parseUnits("200", 18);
      const timeLock = 3600; // 1 hour

      await tokenA.connect(trader1).approve(atomicSwap.address, amountDT);

      await expect(
        atomicSwap
          .connect(trader1)
          .open(
            swapId,
            tokenA.address,
            amountDT,
            tokenB.address,
            amountWDT,
            timeLock
          )
      )
        .to.emit(atomicSwap, "Open")
        .withArgs(
          swapId,
          timeLock,
          tokenA.address,
          tokenB.address,
          amountDT,
          amountWDT,
          trader1.address
        );

      const swap = await atomicSwap.check(swapId);
      expect(swap.erc20ContractAddressDT).to.equal(tokenA.address);
      expect(swap.erc20TokenAmountDT).to.equal(amountDT);
      expect(swap.erc20ContractAddressWDT).to.equal(tokenB.address);
      expect(swap.erc20TokenAmountWDT).to.equal(amountWDT);
      expect(swap.timeLock).to.equal(timeLock);
      expect(swap.whoInitiatedTrade).to.equal(trader1.address);
    });
  });

  describe("close", function () {
    it("should close an open swap", async () => {
      const swapId = 1;
      const amountDT = ethers.utils.parseUnits("100", 18);
      const amountWDT = ethers.utils.parseUnits("200", 18);
      const timeLock = 3600; // 1 hour

      await tokenA.connect(trader1).approve(atomicSwap.address, amountDT);

      await atomicSwap
        .connect(trader1)
        .open(
          swapId,
          tokenA.address,
          amountDT,
          tokenB.address,
          amountWDT,
          timeLock
        );

      await tokenB.connect(trader2).approve(atomicSwap.address, amountWDT);

      await expect(atomicSwap.connect(trader2).close(swapId))
      .to.emit(atomicSwap, "Close")
      .withArgs(swapId);

    // Verify the token balances after closing the swap
    const trader1TokenABalance = await tokenA.balanceOf(trader1.address);
    const trader1TokenBBalance = await tokenB.balanceOf(trader1.address);
    const trader2TokenABalance = await tokenA.balanceOf(trader2.address);
    const trader2TokenBBalance = await tokenB.balanceOf(trader2.address);

    expect(trader1TokenABalance).to.equal(ethers.utils.parseUnits("900", 18));
    expect(trader1TokenBBalance).to.equal(amountWDT);
    expect(trader2TokenABalance).to.equal(amountDT);
    expect(trader2TokenBBalance).to.equal(
      ethers.utils.parseUnits("1800", 18)
    );
  });
});

describe("expire", function () {
  it("should allow the trade initiator to expire the swap", async () => {
    const swapId = 1;
    const amountDT = ethers.utils.parseUnits("100", 18);
    const amountWDT = ethers.utils.parseUnits("200", 18);
    const timeLock = 1; // Set a low time lock for testing

    await tokenA.connect(trader1).approve(atomicSwap.address, amountDT);

    await atomicSwap
      .connect(trader1)
      .open(
        swapId,
        tokenA.address,
        amountDT,
        tokenB.address,
        amountWDT,
        timeLock
      );

    // Wait for the timelock to expire
    await ethers.provider.send("evm_increaseTime", [timeLock + 1]);
    await ethers.provider.send("evm_mine");

    await atomicSwap.connect(trader1).expire(swapId);

    // Verify the tokens are returned to the trade initiator
    const trader1TokenABalance = await tokenA.balanceOf(trader1.address);
    expect(trader1TokenABalance).to.equal(
      ethers.utils.parseUnits("1000", 18)
    );
  });
});

// We can also add more test cases for other functions like expire, etc.
});

