import Web3 from 'web3';

//const web3 = new Web3(window.web3.currentProvider); //Passing Metamask provider to our provider
const web3 = new Web3(window.ethereum);
export default web3;
