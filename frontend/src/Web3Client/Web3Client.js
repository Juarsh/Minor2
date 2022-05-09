import Web3 from 'web3';

let selectedAccounts;

export const init = () => {
    let provider = window.ethereum;
    if(typeof provider !== 'undefned') {
        provider
            .request({method : 'eth_requestAccounts'})
            .then((accounts) => {
                console.log(accounts);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const web3 = new Web3(provider);
}