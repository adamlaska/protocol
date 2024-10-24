// SPDX-License-Identifier: Apache-2.0
/*

  Copyright 2020 ZeroEx Intl.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

*/

pragma solidity ^0.6.5;
pragma experimental ABIEncoderV2;

import "./TestMintableERC20Token.sol";

contract TestWeth is TestMintableERC20Token {
    event Deposit(address owner, uint256 value);
    event Withdrawal(address owner, uint256 value);

    function deposit() external payable {
        this.mint(msg.sender, msg.value);
        emit Deposit(msg.sender, msg.value);
    }

    function depositTo(address owner) external payable {
        this.mint(owner, msg.value);
        emit Deposit(owner, msg.value);
    }

    function withdraw(uint256 amount) external {
        require(balanceOf[msg.sender] >= amount, "TestWeth/INSUFFICIENT_FUNDS");
        balanceOf[msg.sender] -= amount;
        msg.sender.transfer(amount);
        emit Withdrawal(msg.sender, amount);
    }
}
