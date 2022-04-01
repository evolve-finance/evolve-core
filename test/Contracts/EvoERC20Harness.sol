pragma solidity =0.5.16;

import "../../contracts/EvoERC20.sol";

contract EvoERC20Harness is EvoERC20 {
    constructor(string memory _name, string memory _symbol)
        public
        EvoERC20()
    {
        _setName(_name, _symbol);
    }

    function mint(address to, uint256 value) public {
        super._mint(to, value);
    }

    function burn(address from, uint256 value) public {
        super._burn(from, value);
    }

    function setBalanceHarness(address account, uint256 amount) external {
        balanceOf[account] = amount;
    }
}
