// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract HelloWorld {
    function sayHello() public view returns (string memory) {
        console.log("Hello, world!");
        return "Hello, world!"; 
    }
}
