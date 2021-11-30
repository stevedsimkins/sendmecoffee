async function main() {
  const coffeeContractFactory = await hre.ethers.getContractFactory("BuyMeCoffee")
  const coffeeContract = await coffeeContractFactory.deploy();
  await coffeeContract.deployed()
  console.log("Contract Address:", coffeeContract.address)
  // const signer = hre.ethers.provider.getSigner();
  // const owner = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
  // const donation = "5.0"

  // let signerAddress = await signer.getAddress();
  // console.log("Here is the signer's address:", signerAddress);

  // let transferTxn = await coffeeContract.transfer(signerAddress, donation, "Here is a message!");

  // await transferTxn.wait();

  // let tx = await signer.sendTransaction({
  //   to: owner,
  //   value: ethers.utils.parseEther(donation)
  // });

  // await tx.wait();

  // console.log("Transfer complete! %s sent 1eth to %s with the message of Here is a message!", signerAddress, owner);

  // let allCoffees = await coffeeContract.getAllCoffees();
  // console.log(allCoffees);

  // let totalCoffees = await coffeeContract.getTotalCoffees();
  // console.log(totalCoffees);

  // let contractBalance = await hre.ethers.provider.getBalance(coffeeContract.address);
  // console.log("Contract Balance:", hre.ethers.utils.formatEther(contractBalance));

  // let coffeeTxn = await coffeeContract.deposit("Hello", {
  //   value: ethers.utils.parseEther("5.0")
  // });
  // await coffeeTxn.wait();

  // contractBalance = await hre.ethers.provider.getBalance(coffeeContract.address);
  // console.log("Contract Balance:", hre.ethers.utils.formatEther(contractBalance));

  // coffeeTxn = await coffeeContract.deposit("Here is some more money for ya!", {
  //   value: ethers.utils.parseEther("0.00145")
  // })

  // contractBalance = await hre.ethers.provider.getBalance(coffeeContract.address);
  // console.log("Contract Balance:", hre.ethers.utils.formatEther(contractBalance));

  // let allCoffees = await coffeeContract.getAllCoffees();
  // console.log(allCoffees);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
