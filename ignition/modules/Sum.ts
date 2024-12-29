import { ethers } from "hardhat";

async function main() {
  console.log("Deploying Sum Contract...");
  
  // Compile the contract
  console.log("Compiling the Contract...");
  const Sum = await ethers.getContractFactory("SumContract");

  // Deploy the contract
  const sum = await Sum.deploy();

  /* Wait for deployment to complete
  await sum.deployed(); */

  // Log the contract address
  const address = await Object.entries(sum).find(([key]) => key === "runner")?.[1]?.address;
  console.log(`SumContract has been deployed to address: ${address}`);
  
  // Log the initial state values being set for the contract
  console.log(`Setting the state values: x = 5 && y = 10`);

  /* Set the the state variable values
     for the initialization of the contract */
  const tx = await sum.set(5, 10);
  await tx.wait(); // Ensures the transaction is confirmed

  // Get the result from the contract
  const result = await sum.get();

  // Log the result
  console.log(`Sum Fetched From Contract Is: ${result.toString()}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
