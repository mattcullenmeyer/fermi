const { entry, output, mode, resolve, devServer } = require("./webpack.dev.js");
const { moduleRules, plugins } = require("./webpack.config.js");

const Dotenv = require("dotenv-webpack");

module.exports = {
  entry,
  output,
  mode,
  resolve,
  module: {
    rules: [
      ...moduleRules,
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  devServer,
  plugins: [
    ...plugins,
    new Dotenv({
      path: "./environment/.env.mock",
    }),
  ],
};
