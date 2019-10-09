require("dotenv").config();
const withFonts = require("next-fonts");
// module.exports = withFonts({
//   webpack(config, options) {
//     return config;
//   }
// });

module.exports = withFonts({
  cssModules: true,
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  },
  env: {
    SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  }
});
// env: {
//   SPACE_ID: "3vj79kdx97e8",
//   ACCESS_TOKEN: "0DZww-DRNm3LnuStoOb7ijYCu0s_4FVF3ht5wczTOVg"
// }
