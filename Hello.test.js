const { expect } = require("chai");

describe("Hello contract", function () {
    it("Get greeting form contract", async function () {

        const Greeter = await ethers.getContractFactory("Hello");
        const greeter = await Greeter.deploy();

        expect(await greeter.SayHello()).to.equal("Hello world");

    });
});