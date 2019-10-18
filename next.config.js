require("dotenv").config();

// const withFonts = require("next-fonts");
module.exports = {
  env: {
    SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN:
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
  }
};

// module.exports = withFonts({
//   webpack(config, options) {
//     return config;
//   },
//   env: {
//     SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
//     ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
//     REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN:
//       process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
//   }
// });
