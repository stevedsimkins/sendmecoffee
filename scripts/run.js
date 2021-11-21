async function main() {
  const coffeeContractFactory = await hre.ethers.getContractFactory("SendMeCoffee")
  const coffeeContract = await coffeeContractFactory.deploy({
    value: hre.ethers.utils.parseEther("1.0"),
  });
  await coffeeContract.deployed()
  console.log("Contract Address:", coffeeContract.address)

  let contractBalance = await hre.ethers.provider.getBalance(coffeeContract.address);
  console.log("Contract Balance:", hre.ethers.utils.formatEther(contractBalance));

  let count = await coffeeContract.getTotalCoffees()
  console.log(count.toNumber())

  let coffeeTxn = await coffeeContract.sendCoffee("4")
  await coffeeTxn.wait();

  contractBalance = await hre.ethers.provider.getBalance(coffeeContract.address);
  console.log("Contract Balance:", hre.ethers.utils.formatEther(contractBalance));


  let allCoffees = await coffeeContract.getAllCoffees();
  console.log(allCoffees);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
