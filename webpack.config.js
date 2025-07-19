const { merge } = require("webpack-merge");
const webpackConfigCommon = require("./webpack.config.common");

module.exports = merge(webpackConfigCommon, {
  mode: "production",
});
