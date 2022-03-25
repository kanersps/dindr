const {ethers} = require('ethers');
const signer_addr = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

function CreateThings(signer_addr, contract_addr) {
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
    const signer = provider.getSigner(signer_addr);
    const contract = new ethers.Contract(contract_addr, abi, provider); // Read only things
    const contractSigner = contract.connect(signer); // Write things
    return [provider, signer, contract, contractSigner];
}

let abi = [
    "function register(string memory name) public",
]
export const [provider, signer, contract, contractSigner] = CreateThings(signer_addr, "0x5FbDB2315678afecb367f032d93F642f64180aa3");
