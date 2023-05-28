// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract SimpleNFT is ERC721 {
    uint256 private _tokenIdCounter;

    constructor() ERC721("SimpleNFT", "SNFT") {}

    function mintNFT(address to) public {
        _mint(to, _tokenIdCounter);
        _tokenIdCounter++;
    }
}