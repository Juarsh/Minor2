// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;


contract Services {
    struct service { 
        uint256 startTime;
        uint256 endTime;
        string userID;
    }
    mapping(string => service) serviceMap;

    function addService(uint256 _startTime, uint256 _endTime,string memory _userID) public {
        service memory s;
        s.startTime = _startTime;
        s.endTime = _endTime;
        s.userID = _userID;
        serviceMap[_userID] = s;
    }

    function getService(string memory _userID) public view returns(service memory){
        return serviceMap[_userID];
    }
}