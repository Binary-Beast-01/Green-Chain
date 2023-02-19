// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Emission {
    uint256 public dataCount = 0;
    struct Data {
        string wallet_id;
        string carbon;
        string date;
        string fees;
    }

    event EmissionData(string wallet_id, string carbon, string date, string fees);

    mapping(uint256 => Data) public emmis;

    function createEmissionData(string memory _walletID, string memory _carbon, string memory _date, string memory _fees) public {
        dataCount++;
        emmis[dataCount] = Data(_walletID, _carbon, _date, _fees);
        emit EmissionData(_walletID, _carbon, _date, _fees);
    }

}
