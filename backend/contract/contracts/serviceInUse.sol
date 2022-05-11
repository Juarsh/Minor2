// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;


contract InUse {
    struct service1 { 
        uint256 startTime;
        string userID;
        bool inUse;
    }
    mapping(string => service1) service1Map;

    function addService1(uint256 _startTime, string memory _userID) public {
        service1 memory s;
        s.startTime = _startTime;
        s.userID = _userID;
        s.inUse = true;
        service1Map[_userID] = s;
    }
    function changeService1(string memory _userID) public {
        service1Map[_userID].inUse = false;
    }
    function getService1(string memory _userID) public view returns(bool){
        return service1Map[_userID].inUse;
    }

    struct service2 { 
        uint256 startTime;
        string userID;
        bool inUse;
    }
    mapping(string => service2) service2Map;

    function addService2(uint256 _startTime, string memory _userID) public {
        service2 memory s;
        s.startTime = _startTime;
        s.userID = _userID;
        s.inUse = true;
        service2Map[_userID] = s;
    }
    function changeService2(string memory _userID) public {
        service2Map[_userID].inUse = false;
    }
    function getService2(string memory _userID) public view returns(bool){
        return service2Map[_userID].inUse;
    }

}