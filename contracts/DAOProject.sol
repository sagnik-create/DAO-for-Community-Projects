// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MyContract {
    address public owner;
    string public data;

    event DataUpdated(string oldData, string newData);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor(string memory initialData) {
        owner = msg.sender;
        data = initialData;
    }

    function updateData(string memory newData) public onlyOwner {
        string memory oldData = data;
        data = newData;
        emit DataUpdated(oldData, newData);
    }

    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "Invalid address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }
}

