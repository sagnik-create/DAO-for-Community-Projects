import { ethers } from 'ethers';

// Contract ABIs will be imported once created
// import DaoABI from '../contracts/artifacts/contracts/DAO.sol/DAO.json';

let provider;
let signer;

// Initialize ethers with browser provider (MetaMask)
export const initializeEthers = async () => {
  try {
    if (window.ethereum) {
      // Create Web3Provider instance
      provider = new ethers.BrowserProvider(window.ethereum);
      
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      
      // Get signer
      signer = await provider.getSigner();
      return true;
    } else {
      console.error('Please install MetaMask!');
      return false;
    }
  } catch (error) {
    console.error('Error initializing ethers:', error);
    return false;
  }
};

// Get current connected account
export const getCurrentAccount = async () => {
  try {
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    return accounts[0];
  } catch (error) {
    console.error('Error getting current account:', error);
    return null;
  }
};

// Get network chain ID
export const getChainId = async () => {
  try {
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    return parseInt(chainId, 16);
  } catch (error) {
    console.error('Error getting chain ID:', error);
    return null;
  }
};

// Contract interaction functions will be added here once the smart contracts are created
// Example structure:
/*
export const getDaoContract = (contractAddress) => {
  if (!provider) throw new Error('Ethers not initialized');
  return new ethers.Contract(contractAddress, DaoABI.abi, provider);
};

export const getDaoContractWithSigner = (contractAddress) => {
  if (!signer) throw new Error('Signer not available');
  return new ethers.Contract(contractAddress, DaoABI.abi, signer);
};
*/

// Listen for account changes
export const listenToAccountChanges = (callback) => {
  if (window.ethereum) {
    window.ethereum.on('accountsChanged', (accounts) => {
      callback(accounts[0]);
    });
  }
};

// Listen for network changes
export const listenToNetworkChanges = (callback) => {
  if (window.ethereum) {
    window.ethereum.on('chainChanged', (chainId) => {
      callback(parseInt(chainId, 16));
    });
  }
};

// Format ether value
export const formatEther = (value) => {
  return ethers.formatEther(value);
};

// Parse ether value
export const parseEther = (value) => {
  return ethers.parseEther(value);
};

// Get ETH balance for an address
export const getBalance = async (address) => {
  try {
    if (!provider) throw new Error('Ethers not initialized');
    const balance = await provider.getBalance(address);
    return formatEther(balance);
  } catch (error) {
    console.error('Error getting balance:', error);
    return '0';
  }
};
