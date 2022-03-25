// SPDX-License-Identifier: None

// Specifies the version of Solidity, using semantic versioning.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/layout-of-source-files.html#pragma
pragma solidity >=0.8.9;

// Defines a contract named `HelloWorld`.
// A contract is a collection of functions and data (its state). Once deployed, a contract resides at a specific address on the Ethereum blockchain. Learn more: https://solidity.readthedocs.io/en/v0.5.10/structure-of-a-contract.html
contract Dindr {

  struct User {
    string name;
    bool isReal;
  }

  mapping(address => User) public users;

  event NewUser(address user, string name);

   function register(string memory name) external {
      require(users[msg.sender].isReal != true, "You already have an account!");

      users[msg.sender] = User({
        name: name,
        isReal: true
      });

      emit NewUser(msg.sender, name);
   }
}
