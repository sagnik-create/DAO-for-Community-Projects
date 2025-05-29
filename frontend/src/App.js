import { useEffect, useState } from "react";
import { BrowserProvider, Contract } from "ethers";

// ✅ Replace with your actual contract address
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// ✅ Ensure ABI is directly passed
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
];

export default function MyContractComponent() {
  const [contract, setContract] = useState(null);
  const [data, setData] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    const init = async () => {
      try {
        if (typeof window.ethereum === "undefined") {
          alert("Please install MetaMask or another Web3 wallet.");
          return;
        }

        const provider = new BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const contractInstance = new Contract(CONTRACT_ADDRESS, ABI, signer);

        setContract(contractInstance);

        const currentData = await contractInstance.data();
        setData(currentData);

        contractInstance.on("DataUpdated", (oldData, newData) => {
          console.log("Data updated:", oldData, newData);
          setData(newData);
        });
      } catch (error) {
        console.error("Error during contract initialization:", error);
      }
    };

    init();

    // Cleanup listeners on unmount
    return () => {
      if (contract) {
        contract.removeAllListeners("DataUpdated");
      }
    };
  }, []);

  const updateData = async () => {
    if (!contract || !input.trim()) return;

    try {
      const tx = await contract.updateData(input);
      await tx.wait();
      setInput("");
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>DAO Project: Contract Interaction</h2>
      <p><strong>Current Data:</strong> {data}</p>

      <input
        type="text"
        placeholder="Enter new data"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}
