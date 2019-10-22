require("dotenv").config();
const withCSS = require("@zeit/next-css");
// const withFonts = require("next-fonts");
module.exports = withCSS({
  cssModules: true,
  webpack: function(config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: false,
          name: "[name].[ext]"
        }
      }
    });
    return config;
  },
  env: {
    SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    MAILGUN_APIKEY: process.env.MAILGUN_APIKEY,
    REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN:
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
  }
});

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
