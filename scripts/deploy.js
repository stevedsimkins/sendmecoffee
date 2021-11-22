async function main() {
  const coffeeContractFactory = await hre.ethers.getContractFactory("BuyMeCoffee")
  const coffeeContract = await coffeeContractFactory.deploy({
    value: hre.ethers.utils.parseEther("1.0"),
  });
  await coffeeContract.deployed()
  console.log("Contract Address:", coffeeContract.address)

  let contractBalance = await hre.ethers.provider.getBalance(coffeeContract.address);
  console.log("Contract Balance:", hre.ethers.utils.formatEther(contractBalance));

  let coffeeTxn = await coffeeContract.deposit("Hello", {
    value: ethers.utils.parseEther("5.0")
  });
  await coffeeTxn.wait();

  contractBalance = await hre.ethers.provider.getBalance(coffeeContract.address);
  console.log("Contract Balance:", hre.ethers.utils.formatEther(contractBalance));

  coffeeTxn = await coffeeContract.deposit("Here is some more money for ya!", {
    value: ethers.utils.parseEther("0.00145")
  })

  contractBalance = await hre.ethers.provider.getBalance(coffeeContract.address);
  console.log("Contract Balance:", hre.ethers.utils.formatEther(contractBalance));


  let withdrawTxn = await coffeeContract.withdraw();
  await withdrawTxn.wait();

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
