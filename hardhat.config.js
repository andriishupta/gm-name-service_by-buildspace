require("@nomiclabs/hardhat-waffle");

require('dotenv').config()

const { ALCHEMY_HTTP_URL, DEV_METAMASK_ACCOUNT_PRIVATE_KEY } = process.env;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: ALCHEMY_HTTP_URL,
      accounts: [DEV_METAMASK_ACCOUNT_PRIVATE_KEY],
    }
  }
};
