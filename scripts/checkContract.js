const contractAddress = process.env.REACT_APP_GMNS_CONTRACT_ADDRESS

const main = async () => {
  const domainContract = await hre.ethers.getContractAt("Domains", contractAddress);
  console.log("Contract records:", await domainContract.getRecord('hello4'));
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();