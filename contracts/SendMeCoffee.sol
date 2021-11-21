//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SendMeCoffee {
  uint totalCoffees;

  event NewCoffee(address indexed from, string amount);

  struct Coffee {
    address sender;
    string amount;
  }

  Coffee[] coffees;

  constructor() payable {
    console.log("Constructed!");
  }

  function sendCoffee(string memory _amount) public {
    totalCoffees += 1;
    console.log("%s has sent %s coffees", msg.sender, _amount);
    coffees.push(Coffee(msg.sender, _amount));
    emit NewCoffee(msg.sender, _amount);

    uint256 coffeeMoney = 0.00114 ether;

    require(
      coffeeMoney <= address(this).balance, 
      "Trying to withdraw more than the contract has."
    );
    (bool success, ) = (msg.sender).call{value: coffeeMoney}("");
    require(success, "Failed to withdraw money from Contract."); 
  }

  function getAllCoffees() view public returns (Coffee[] memory) {
    return coffees;
  }

  function getTotalCoffees() public view returns (uint256) {
    console.log("Total coffees received: %s", totalCoffees);
    return totalCoffees;
  }
}
