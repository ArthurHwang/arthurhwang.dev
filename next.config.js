require("dotenv").config();
// const withFonts = require("next-fonts");
// module.exports = withFonts({
//   webpack(config, options) {
//     return config;
//   },
//   env: {
//     SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
//     ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
//   }
// });

module.exports = {
  // webpack(config, options) {
  //   return config;
  // },
  env: {
    SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  }
};

// module.exports = withFonts({
//   cssModules: true,
//   webpack: function(config) {
//     config.module.rules.push({
//       // test: /\.md$/,
//       // use: "raw-loader"
//       test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
//       use: {
//         loader: "url-loader",
//         options: {
//           limit: 100000,
//           name: "[name].[ext]"
//         }
//       }
//     });
//     return config;
//   },
//   env: {
//     SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
//     ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
//   }
// });
