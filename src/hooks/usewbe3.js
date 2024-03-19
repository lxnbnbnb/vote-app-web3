import Web3 from 'web3'
import votejson from '../contract/vote.json'

function usewbe3(){
    const web3=new Web3(Web3.givenProvider || "https://sepolia.infura.io/v3/7506c62526c34496b3a68c6c24d830ae");
    const contractaddress="0x8C49095Ea0b3715C801ccC1AF94cf5Ea86acA4B5"
    const votecontract=new web3.eth.Contract(votejson.abi,contractaddress)
    async function getAccount() {
        const accounts = await web3.eth.requestAccounts();
        return accounts[0];
      };
    
    return {
        web3,
        contractaddress,
        votecontract,
        getAccount
    }
}
export default usewbe3