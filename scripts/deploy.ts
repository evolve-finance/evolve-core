import { Contract } from "@ethersproject/contracts";
import { ethers } from "hardhat";

async function main() {

  const ADMIN_ADDRESS = "0xDef1ffF6D3a78e30b772B8BC9f8a7BDea06C520D";
  const RESERVES_ADMIN_ADDRESS = "0xDef1ffF6D3a78e30b772B8BC9f8a7BDea06C520D";
  const PRICE_ORACLE_ADDRESS = "0xc267fCf06A8F694cAFB25c8Eb48b00718b5952c1";

  const bDeployer = await (
    await ethers.getContractFactory("BDeployer")
  ).deploy();
  const cDeployer = await (
    await ethers.getContractFactory("CDeployer")
  ).deploy();

  logContractDeploy("bDeployer", bDeployer);
  logContractDeploy("cDeployer", cDeployer);

  const evoFactory = await (
    await ethers.getContractFactory("Factory")
  ).deploy(
    ADMIN_ADDRESS,
    RESERVES_ADMIN_ADDRESS,
    bDeployer.address,
    cDeployer.address,
    PRICE_ORACLE_ADDRESS
  );

  logContractDeploy("factory", evoFactory);

  console.log("Awaiting deployment...");

  await bDeployer.deployed();
  await cDeployer.deployed();
  await evoFactory.deployed();

  console.log("Finished");
}

const logContractDeploy = (name: string, contract: Contract) => {
  console.log(`${name} address: ${contract.address}`);
  console.log(`${name} deploy tx hash: ${contract.deployTransaction.hash}`);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
