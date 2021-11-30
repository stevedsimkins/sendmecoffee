// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";


contract BuyMeCoffee {

  uint totalCoffees;

  event NewCoffee(address indexed from, string amount, string message);

  address public owner;

  struct Coffee {
    address sender;
    string amount;
    string message;
  }

  Coffee[] coffees;

  constructor()  {
    console.log("Contract constructed");
  }

  function transfer(address sender, string memory _amount, string memory _message) public {
    totalCoffees += 1;
    console.log("%s has sent %s ether with the message: %s", msg.sender, _amount, _message);
    coffees.push(Coffee(msg.sender, _amount, _message));
    emit NewCoffee(msg.sender, _amount, _message);
  }

  function getAllCoffees() view public returns (Coffee[] memory) {
    return coffees;
  }

  function getTotalCoffees() public view returns (uint) {
    console.log("Total coffees received: %s", totalCoffees);
    return totalCoffees;
  }
}
