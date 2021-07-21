const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: "./public/assets/js/index.js",
  output: {
    path: __dirname + "/public/dist/",
    filename: "bundle.js"
  },
  mode: "development",
  plugins: [
    new WebpackPwaManifest({
      name: 'Budget Tracking App',
      short_name: 'Budget App',
      description: 'User friendly budgeting app that allows you to add and subtract funds',
      background_color: '#ffffff',
      crossorigin: 'use-credentials',
      inject: false,
      fingerprints: false, 
      icons: [
        {
          src: path.resolve(__dirname, 'public/assets/images/icons/icon-512x512.png'),
          sizes: [192, 512] 
        }
      ]
    })
  ]
};

module.exports = config;