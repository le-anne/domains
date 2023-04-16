require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: "https://few-wandering-patina.matic-testnet.discover.quiknode.pro/cea691a9a77d5aee44586c4a13a050535f41659b/",
      accounts: [
        "2028148af00285696e657810b30e99500f0238d6d69f2d15479d7947a3992273",
      ],
      gasPrice: 2 * 1e9, // Set gas price to 1 Gwei
    },
  },
};
