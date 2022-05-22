pragma solidity =0.5.16;

import "./Borrowable.sol";
import "./Collateral.sol";

contract Code {
    function getBorrowableHash() public pure returns (bytes32) {
        return keccak256(type(Borrowable).creationCode);
    }
    
    function getBorrowableCode() public pure returns (bytes memory) {
        return type(Borrowable).creationCode;
    }
}

contract CollateralCode {
    function getColletralCode() public pure returns (bytes memory) {
        return type(Collateral).creationCode;
    }

    function getCollateralHash() public pure returns (bytes32) {
        return keccak256(abi.encode(type(Collateral).creationCode));
    }
}