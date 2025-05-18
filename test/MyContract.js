const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyContract", function () {
  let myContract;
  let owner;

  beforeEach(async function () {
    const MyContract = await ethers.getContractFactory("MyContract");
    [owner] = await ethers.getSigners();
    myContract = await MyContract.deploy("Initial Data"); // deploy returns the instance
    await myContract.waitForDeployment(); // ✅ correct function in newer versions of ethers

    // If you are using ethers v5, use:
    // await myContract.deployed();
  });

  it("Should deploy and set the initial data", async function () {
    expect(await myContract.data()).to.equal("Initial Data");
  });
});
