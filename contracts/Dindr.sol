// SPDX-License-Identifier: None

// Specifies the version of Solidity, using semantic versioning.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/layout-of-source-files.html#pragma
pragma solidity >=0.7.3;

// Defines a contract named `HelloWorld`.
// A contract is a collection of functions and data (its state). Once deployed, a contract resides at a specific address on the Ethereum blockchain. Learn more: https://solidity.readthedocs.io/en/v0.5.10/structure-of-a-contract.html
import "solidity-string-utils/StringUtils.sol";

contract Dindr {
  using StringUtils for *;

  struct User {
    string name;
    bool isReal;
    string addr;
  }

  struct Chat {
    address user1;
    address user2;
    string[] messages;
  }

  mapping(address => User) public users;
  mapping(address => string[]) public matches;

  Chat[] chats;

  event NewUser(address user, string name);
  event Matched(User matched, User matchee);
   
   function register(string memory name) public {
      require(users[msg.sender].isReal != true, "You already have an account!");

      users[msg.sender] = User({
        name: name,
        isReal: true,
        addr: abi.encodePacked(msg.sender)
      });

      emit NewUser(msg.sender, name);
   }

  function findUserInArray(User[] memory users, string memory target) public returns(User memory user) {
    for(uint256 i = 0; i < users.length; i++) {
      if(StringUtils.equal(users[i].addr, target)) {
        return users[i];
      }
    }
  }

  function like(string memory target) external {
    User memory found = findUserInArray(matches[target], target);

    if (found.isReal) {
      emit Matched(users[msg.sender], found);
    } else {
      matches[msg.sender] = [target];
    }
  }

  function dislike(address target) external {}

  function sendMessage(address target) external {}

  function getMessages(address target) external {}
}