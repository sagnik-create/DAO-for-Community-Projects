
# DAO for Community Projects

## 🚀 Project Title
**DAO for Community Projects**

## 📄 Description
A decentralized autonomous organization (DAO) built on the Ethereum blockchain to fund and manage community-driven initiatives. The dApp allows community members to view contract data, propose updates, and transfer contract ownership using a Web3-enabled frontend.

## 🎯 Vision
To empower communities through decentralized governance and transparent fund allocation. By utilizing smart contracts and a Web3 frontend, this project ensures trustless execution and participatory decision-making for local and global initiatives.

## 🔮 Future Scope
- ✅ Governance token implementation for voting power
- ✅ Web3 frontend with wallet-based access control
- ⏳ Proposal submission and voting mechanism
- ⏳ Multi-signature wallet support for fund distribution
- ⏳ Layer 2 or cross-chain compatibility (e.g., Polygon, Optimism)

## 💡 Key Features
- 🔗 **Ethereum Smart Contract** with `updateData()` and `transferOwnership()` logic
- 👛 **MetaMask integration** for authentication and transaction signing
- 🔄 **Live event listeners** to track `DataUpdated` and `OwnershipTransferred` events
- 👨‍💼 **Owner-only access control** for sensitive actions
- 🧠 **React + Ethers.js frontend** to interact with the contract in real time

## 🏗️ Tech Stack
- **Frontend:** React, Vite, Ethers.js
- **Backend / Blockchain:** Solidity Smart Contract deployed to Ethereum (via Hardhat)
- **Wallet Integration:** MetaMask
- **Development Tools:** Hardhat, Node.js

## 🧪 Functionalities
| Function           | Description                             |
|--------------------|-----------------------------------------|
| `updateData()`     | Update the stored string in the contract (owner only) |
| `transferOwnership()` | Transfer ownership of the contract to another address |
| `data()`           | Publicly viewable contract data         |
| `owner()`          | Returns the current contract owner      |
| Event Listeners    | Automatically update UI on `DataUpdated` and `OwnershipTransferred` |

## 🔐 Smart Contract Address
`0xd9145CCE52D386f254917e481eB44e9943F39138`

## 📸 UI Preview
![image](https://github.com/user-attachments/assets/082cd324-801b-490a-8ee3-8080eb5f2161)

## 🛠️ How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/dao-community-projects.git
   cd dao-community-projects
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the frontend**
   ```bash
   npm run dev
   ```

4. **Connect MetaMask**
   - Ensure your MetaMask is set to the correct network (e.g., Hardhat local or Sepolia testnet)
   - Interact with the contract through the interface

## 📌 Developer Notes
- Make sure MetaMask is installed and connected to the same network as the deployed contract.
- You may need to deploy your own contract if the address changes.
