require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.28", // Ganti dari 0.8.18
  networks: {
    megaeth: {
      url: "https://carrot.megaeth.com/rpc",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
