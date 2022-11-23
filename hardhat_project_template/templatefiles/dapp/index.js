
import { ethers } from "./ethers-5.1.esm.min.js";
import { contract_abi, contract_address } from "./contract_info.js"

let provider;
let signer, signerAddress;
let buttonConnect, buttonTest;
let contract;


const initUI = () => {
    buttonConnect = document.getElementById('buttonConnect');
    buttonTest = document.getElementById('buttonTest');
    buttonTest.onclick = onButtonTest;
}

const onClickConnect = async () => {
    try {
        // Will open the MetaMask UI
        provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        signerAddress = await signer.getAddress();
        buttonConnect.innerText = signerAddress;
        buttonConnect.disabled = true;

        // the contract
        // 后面要使用这个contract进行函数调用， 那么这里的第三个参数必须传signer， 而不是provider
        let address = contract_address;
        let abi = contract_abi;
        contract = new ethers.Contract(address, abi, signer);

    } catch (error) {
        console.error(error)
    }
}

const onButtonTest = async () => {
    if (contract == null) {
        alert("Please connect to MetaMask first");
    }
    try {
        const greetings = await contract.sayHello();
        alert(greetings);
    } catch (e) {
        console.log(e);
    }

}

const isMetaMaskInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
}

const MetaMaskClientCheck = () => {
    if (!isMetaMaskInstalled()) {
        buttonConnect.innerText = 'Please install MetaMask';
        //connectButton.onclick = onClickInstall;
        buttonConnect.disabled = true;
    } else {
        buttonConnect.innerText = 'Connect to MetaMask';
        buttonConnect.onclick = onClickConnect
    }
}




const startApp = async function () {
    console.log("start app...")
    initUI();
    MetaMaskClientCheck();

}

window.addEventListener("DOMContentLoaded", startApp);