# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

```
npx hardhat node: run a development node
```

```
npx hardhat compile: compile your smart contracts if you want to deploy them
```

```
npx hardhat ignition deploy [path to your deploy script] --network localhost: deploy your smart contracts

[path to your deploy script]: Example ignition/modules/*.js
```

```
npx hardhat console --network localhost: open a console in hardhat to interact with your smart contract
```
