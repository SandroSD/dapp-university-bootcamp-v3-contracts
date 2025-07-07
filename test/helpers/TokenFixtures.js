const { ethers } = require("hardhat");

async function deployTokenFixture() {
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy("Dapp University", "DAPP", "1000000");

    return {token};
}

const tokens = (n) => ethers.parseUnits(n, 18)

module.exports = {
    deployTokenFixture,
    tokens
}