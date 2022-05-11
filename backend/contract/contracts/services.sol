// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;


contract Services {
    struct log { 
        uint256 startTime;
        uint256 endTime;
        string[] memberIDs;
        string userID;
        uint256 serviceID;
    }
    mapping(string => log[]) serviceMap;

    function addService(uint256 _startTime, uint256 _endTime,string[] memory _memberIDs, string memory _userID, uint256 _serviceID) public {
        log memory s;
        s.startTime = _startTime;
        s.endTime = _endTime;
        s.userID = _userID;
        s.memberIDs = _memberIDs;
        s.serviceID = _serviceID;
        serviceMap[_userID].push(s);
    }

    function getService(string memory _userID) public view returns(log[] memory){
        return serviceMap[_userID];
    }

}