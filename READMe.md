# 🏛️ DAO for Community Projects

## 🚀 Project Title

**DAO for Community Projects**

## 📄 Description

A decentralized autonomous organization (DAO) built on the Ethereum blockchain to support, fund, and govern community-driven initiatives. This dApp empowers verified community members to view on-chain data, propose updates, and transfer contract ownership through a secure, wallet-connected frontend.

---

## 🎯 Vision

To empower communities through decentralized governance and transparent fund allocation. By leveraging smart contracts and Web3 technologies, the platform enables trustless execution and democratic participation for local and global initiatives.

---

## ⚙️ How It Works

The core of the project is an Ethereum smart contract that enables a simple DAO system with data updates and ownership transfer functionalities, integrated with a React + Ethers.js frontend.

### 🔐 Smart Contract Logic

* **`updateData(string newData)`**

  * Allows the contract owner to update a publicly viewable string.
  * Emits `DataUpdated(address updater, string newData)` on execution.

* **`transferOwnership(address newOwner)`**

  * Enables the current owner to transfer contract control.
  * Emits `OwnershipTransferred(address oldOwner, address newOwner)`.

* **Public Read Functions**

  * `data()` – Returns the latest stored data.
  * `owner()` – Returns the current owner's address.

---

### 🌐 Frontend Interaction

* **Wallet Integration**

  * Users connect via MetaMask.
  * Only the owner sees and can use sensitive features like update and transfer buttons.

* **Live UI Updates**

  * Ethers.js listens for smart contract events and automatically reflects changes in the UI (no page refresh required).

* **Role-Based Access**

  * Contract owner gets administrative controls.
  * Community members can view data and track updates.

---

### 🧑‍🤝‍🧑 User Roles

| Role             | Capabilities                                       |
| ---------------- | -------------------------------------------------- |
| Owner            | Update data, transfer ownership                    |
| Community Member | View data, follow updates through live event feeds |

---

## 💡 Key Features

* ✅ **Ethereum Smart Contract** with secure admin-only logic
* ✅ **MetaMask Integration** for wallet-based authentication
* ✅ **Real-Time Event Listening** with automatic UI refresh
* ✅ **React + Vite + Ethers.js** for a lightweight Web3 frontend
* ✅ **Hardhat for Development & Deployment**

---

## 🔮 Future Scope

* ✅ Governance token implementation for voting power
* ✅ Web3 frontend with wallet-based access control
* ⏳ Proposal submission and voting system
* ⏳ Multi-signature wallet support for fund releases
* ⏳ Layer 2 / Cross-chain compatibility (e.g., Polygon, Optimism)

---

## 🧪 Functionalities

| Function                     | Description                                   |
| ---------------------------- | --------------------------------------------- |
| `updateData()`               | Updates the stored data (owner-only)          |
| `transferOwnership()`        | Transfers contract ownership to a new address |
| `data()`                     | Returns current data stored in the contract   |
| `owner()`                    | Returns the current owner's address           |
| `DataUpdated` Event          | Emitted on data update                        |
| `OwnershipTransferred` Event | Emitted on ownership change                   |

---

## 🛠️ Tech Stack

* **Frontend:** React, Vite, Ethers.js
* **Blockchain / Backend:** Solidity (Hardhat)
* **Wallet Integration:** MetaMask
* **Dev Tools:** Hardhat, Node.js, VS Code

---

## 📸 UI Preview
![Screenshot 2025-06-01 201959](https://github.com/user-attachments/assets/df97a9a3-a557-4456-84ce-db839113eb85)

![Screenshot 2025-06-01 202105](https://github.com/user-attachments/assets/355b8c0c-fabe-4d31-84b5-cb4ad82b20ce)

![Screenshot 2025-06-01 202154](https://github.com/user-attachments/assets/4be41a4c-4738-4463-b7e3-7e5bc93fccf3)

![image](https://github.com/user-attachments/assets/082cd324-801b-490a-8ee3-8080eb5f2161)
![image](https://github.com/user-attachments/assets/1b18b1fb-84e0-4896-b2e9-b6f71ef6ef55)


---

## 🔐 Smart Contract Address

```
0xd9145CCE52D386f254917e481eB44e9943F39138
```

> Deployed on Ethereum testnet. Ensure MetaMask is set to the correct network (e.g., Hardhat local or Sepolia).

---

## 🧑‍💻 How to Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/dao-community-projects.git
   cd dao-community-projects
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the frontend**

   ```bash
   npm run dev
   ```

4. **Connect MetaMask**

   * Open the app in your browser.
   * Connect your wallet and ensure you're on the right network.
   * If needed, update the contract address in the frontend config.

---

## 📌 Developer Notes

* Make sure MetaMask is installed and set to the right Ethereum network.
* Event listeners make the UI reactive — no need to refresh.
* You can easily swap the smart contract or add proposal voting with minor upgrades.

---

