require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: "https://twilight-morning-ensemble.matic-testnet.discover.quiknode.pro/4fa2aa1fe54dec20646a32865b1d55d15fd5d11a/",
      accounts: [
        "f1dd74790a09bdfdedbce8d7e592861867e261f943aab6f8c00eb969d35111c6",
      ],
    },
  },
};
