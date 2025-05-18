import { useEffect, useState } from "react";
import { ethers } from "ethers";

// Paste the ABI here directly
const ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "initialData",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "oldData",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "newData",
				"type": "string"
			}
		],
		"name": "DataUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "data",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newData",
				"type": "string"
			}
		],
		"name": "updateData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

// Replace with your actual deployed contract address
const CONTRACT_ADDRESS = "0xd9145CCE52D386f254917e481eB44e9943F39138";

function App() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [data, setData] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
        setContract(contractInstance);

        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);

        const currentData = await contractInstance.data();
        setData(currentData);
      }
    };
    init();
  }, []);

  const updateData = async () => {
    const tx = await contract.updateData(input);
    await tx.wait();
    const newData = await contract.data();
    setData(newData);
    setInput("");
  };

  return (
    <div>
      <h1>MyContract Dashboard</h1>
      <p><strong>Connected Wallet:</strong> {account}</p>
      <p><strong>Current Data:</strong> {data}</p>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="New data" />
      <button onClick={updateData}>Update</button>
    </div>
  );
}

export default App;
