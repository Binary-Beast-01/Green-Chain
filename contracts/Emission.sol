// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Emission {
    uint256 public dataCount = 0;
    struct Data {
        string wallet_id;
        string carbon;
    }

    event EmissionData(string wallet_id, string carbon);

    mapping(uint256 => Data) public emmis;

    function createEmissionData(string memory _walletID, string memory _carbon) public {
        dataCount++;
        emmis[dataCount] = Data(_walletID, _carbon);
        emit EmissionData(_walletID, _carbon);
    }

}
