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

  constructor() {
    console.log("Constructed!");
  }

  function sendCoffee(string memory _amount) public {
    totalCoffees += 1;
    console.log("%s has sent %s coffees", msg.sender, _amount);
    coffees.push(Coffee(msg.sender, _amount));
    emit NewCoffee(msg.sender, _amount);
  }

  function getAllCoffees() view public returns (Coffee[] memory) {
    return coffees;
  }

  function getTotalCoffees() public view returns (uint256) {
    console.log("Total coffees received: %s", totalCoffees);
    return totalCoffees;
  }
}
