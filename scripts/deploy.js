const { ethers } = require("hardhat");

async function main() {
  // Get the ContractFactory for MyContract
  const MyContract = await ethers.getContractFactory("MyContract");

  // Deploy the contract with constructor argument
  const contract = await MyContract.deploy("Initial DAO Data");

  // Wait for deployment to finish
  await contract.waitForDeployment();

  // Print the deployed contract address
  console.log("MyContract deployed to:", contract.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });
