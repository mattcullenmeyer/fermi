const {
  entry,
  output,
  resolve,
  moduleRules,
  devServer,
  plugins,
} = require("./webpack.config.js");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry,
  output,
  mode: "development",
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
  devServer: {
    ...devServer,
    host: "127.0.0.1",
    port: 8080,
  },
  plugins: [
    ...plugins,
    new Dotenv({
      path: "./environment/.env.dev",
    }),
  ],
};
