require("dotenv").config();

module.exports = {
  env: {
    SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN:
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
  }
};
