const withSass = require("@zeit/next-sass");
module.exports = withSass();

/*
const withLess = require("@zeit/next-less");
module.exports = withLess();

module.exports = {
  test: /global\.less$/,
  loaders: ["style-loader", "css-loader", "less-loader"]
};
*/
