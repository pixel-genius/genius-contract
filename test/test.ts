import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

describe("Genius", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("Genius");

    const initialOwner = (await ethers.getSigners())[0].address;
    const recipient = (await ethers.getSigners())[1].address;

    const instance = await upgrades.deployProxy(ContractFactory, [initialOwner, recipient]);
    await instance.waitForDeployment();

    expect(await instance.name()).to.equal("Genius");
  });
});
