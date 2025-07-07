// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Token {
    // State variables
    // public/private: visibility of the variable
    string public name;
    
    string public symbol;
    
    //uint: unsigned integer (uint, by default 256)
    uint8 public decimals = 18;

    uint256 public totalSupply;

    // runs once the smart contract deploys to the blockchain
    constructor(string memory _name, string memory _symbol, uint256 _totalSupply) {
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply * (10 ** decimals);
    }
}


