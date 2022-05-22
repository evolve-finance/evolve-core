import { ethers } from "hardhat";

const main = async () => {

  // Create a new UNIPAIR
  
 
  // Factory
  const factory = await ethers.getContractAt(
    "Factory",
    "0x55deff482a9fCf9bcbbB8ab4cFDb82cc9Ef1c33D"
  );
  // MM FINANCE CRO-USDC
  const uniswapV2Pair = {
    address: "0xa68466208F1A3Eb21650320D2520ee8eBA5ba623",
  };

  // Create Lending Pool

  await factory.createCollateral(uniswapV2Pair.address);
  await factory.createBorrowable0(uniswapV2Pair.address);
  await factory.createBorrowable1(uniswapV2Pair.address);

  // Initializes Lending Pool
  await factory.initializeLendingPool(uniswapV2Pair.address);
  const lendingPool = await factory.getLendingPool(uniswapV2Pair.address);
  console.log(lendingPool);
  // return { factory, uniswapV2Pair, collateral, borrowable0, borrowable1 };
};

main().catch((e) => {
  console.log(e);
});
