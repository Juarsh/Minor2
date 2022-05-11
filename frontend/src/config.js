const constants = {
    SERVER_URL: "http://localhost:8000",
    PROVIDER: "http://localhost:7545",
    SERVICE_CONTRACT_ADDRESS: "0x97A211b9c7cd146266d5921e711747784257ab12",
    SERVICE_CONTRACT_ABI: [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_startTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_endTime",
                    "type": "uint256"
                },
                {
                    "internalType": "string[]",
                    "name": "_memberIDs",
                    "type": "string[]"
                },
                {
                    "internalType": "string",
                    "name": "_userID",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_serviceID",
                    "type": "uint256"
                }
            ],
            "name": "addService",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_userID",
                    "type": "string"
                }
            ],
            "name": "getService",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "startTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "endTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string[]",
                            "name": "memberIDs",
                            "type": "string[]"
                        },
                        {
                            "internalType": "string",
                            "name": "userID",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "serviceID",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Services.log[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    IN_USE_CONTRACT_ADDRESS: "0xA56b4F2EDDCdeA5503a1770457eC4Eaedc6eb6aB",
    IN_USE_CONTRACT_ABI: [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_startTime",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_userID",
                    "type": "string"
                }
            ],
            "name": "addService1",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_startTime",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_userID",
                    "type": "string"
                }
            ],
            "name": "addService2",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_userID",
                    "type": "string"
                }
            ],
            "name": "changeService1",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_userID",
                    "type": "string"
                }
            ],
            "name": "changeService2",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_userID",
                    "type": "string"
                }
            ],
            "name": "getService1",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_userID",
                    "type": "string"
                }
            ],
            "name": "getService2",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
}

export default constants; 