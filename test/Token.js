const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

const { deployTokenFixture, tokens } = require("./helpers/TokenFixtures");



describe("Token", () => {    
    it("has correct name", async () => {
        const { token } = await loadFixture(deployTokenFixture);
        
        const name = await token.name();

        expect(name).to.equal("Dapp University");
    })

    it("has correct symbol", async () => {
        const { token } = await loadFixture(deployTokenFixture);

        const symbol = await token.symbol();

        expect(symbol).to.equal("DAPP");
    })

    it("has correct decimals", async () => {
        const { token } = await loadFixture(deployTokenFixture);

        const decimals = await token.decimals();

        expect(decimals).to.equal(18);
    })

    it("has correct total supply", async () => {
        const { token } = await loadFixture(deployTokenFixture);

        const totalSupply = await token.totalSupply();

        //expect(totalSupply).to.equal("1000000000000000000000000");
        
        expect(totalSupply).to.equal(tokens("1000000"));
    })
})