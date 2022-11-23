const { expect } = require('chai');
const { ethers } = require('hardhat'); // https://docs.ethers.io/v5/
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe('Hello Contract Test Suits', function () {

    // https://hardhat.org/tutorial/testing-contracts#reusing-common-test-setups-with-fixtures
    // loadFixture将在第一次运行设置，并在其他测试中快速返回到该状态。
    async function deployContractFixture() {
        const [owner, addr1] = await ethers.getSigners();
        const facotry = await ethers.getContractFactory("HelloWorld");
        const contract = await facotry.deploy();
        return { contract, owner, addr1 };
    }

    it("测试sayHello", async function () {
        const { contract, owner, addr1 } = await loadFixture(deployContractFixture);

        // 测试sayHello
        const greetings = await contract.sayHello();
        expect(greetings).to.equal("Hello, world!");
    });

});