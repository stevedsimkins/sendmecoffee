// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";


contract BuyMeCoffee {

  uint256 totalCoffees;

  event NewCoffee(address indexed from, string amount, string message);

  address payable public owner;

  struct Coffee {
    address sender;
    string amount;
    string message;
  }

  Coffee[] coffees;

  constructor() payable {
    owner = payable(msg.sender);
  }

  function deposit(string memory _message, string memory _amount) public payable {
    totalCoffees += 1;
    console.log("%s has sent %s coffees with the message %s", msg.sender, _amount, _message);
    coffees.push(Coffee(msg.sender, _amount, _message));
    emit NewCoffee(msg.sender, _amount, _message);
  }
  
  function withdraw() public {
    // get the amount of Ether stored in this contract
    uint amount = address(this).balance;

    // send all Ether to owner
    // Owner can receive Ether since the address of owner is payable
    (bool success, ) = owner.call{value: amount}("");
    require(success, "Failed to send Ether");
  }

  function getAllCoffees() view public returns (Coffee[] memory) {
    return coffees;
  }

  function getTotalCoffees() public view returns (uint256) {
    console.log("Total coffees received: %s", totalCoffees);
    return totalCoffees;
  }
}
