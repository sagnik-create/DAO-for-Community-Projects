// scripts/deploy.js

const hre = require("hardhat");

async function main() {
  const MyContract = await hre.ethers.getContractFactory("MyContract");

  // Pass constructor argument here
  const myContract = await MyContract.deploy("Initial data");

  console.log("MyContract deployed to:", myContract.target);
}

main().catch((error) => {
  console.error("Deployment failed:", error);
  process.exitCode = 1;
});
