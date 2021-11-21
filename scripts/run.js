async function main() {
  const coffeeContractFactory = await hre.ethers.getContractFactory("SendMeCoffee")
  const coffeeContract = await coffeeContractFactory.deploy()
  await coffeeContract.deployed()
  console.log("Contract Address:", coffeeContract.address)

  let count = await coffeeContract.getTotalCoffees()
  console.log(count.toNumber())

  let coffeeTxn = await coffeeContract.sendCoffee("4")
  await coffeeTxn.wait();

  let allCoffees = await coffeeContract.getAllCoffees();
  console.log(allCoffees);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
