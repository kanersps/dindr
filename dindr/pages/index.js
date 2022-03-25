import styles from "../styles/Home.module.css";
import Web3 from "web3";

export default function Home() {
  const web3 = new Web3("ws://localhost:8545");

  const contract = new web3.eth.Contract(
    [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor",
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "user",
            "type": "address",
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "name",
            "type": "string",
          },
        ],
        "name": "NewUser",
        "type": "event",
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string",
          },
        ],
        "name": "register",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address",
          },
        ],
        "name": "users",
        "outputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string",
          },
          {
            "internalType": "bool",
            "name": "isReal",
            "type": "bool",
          },
        ],
        "stateMutability": "view",
        "type": "function",
      },
    ],
    "0xfaAddC93baf78e89DCf37bA67943E1bE8F37Bb8c"
  );

  contract.methods
    .users("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
    .call()
    .then((users) => {
      console.log(users);
    });

  return (
    <div className={styles.container}>
      <h1>DindR</h1>
      <button
        onClick={() => {
          contract.methods.register("Osu").send({ from: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" });
        }}
      >
        Register
      </button>
    </div>
  );
}
