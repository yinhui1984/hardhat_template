// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.4;
import "hardhat/console.sol";

contract Hello {
    constructor() {
        console.log("enter the constructor");
    }

    function SayHello() public view returns (string memory) {
        console.log("this is the log in function SayHello");
        return "Hello world";
    }
}
