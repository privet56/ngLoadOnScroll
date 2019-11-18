const TerserPlugin = require('terser-webpack-plugin');
//var prod = process.env.NODE_ENV === "prod" || process.env.NODE_ENV === "production";
//var prod = process.env.WEBPACK_MODE === 'production' || process.env.WEBPACK_MODE === 'prod';
var prod = process.argv.indexOf("--prod") > -1;

module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: prod
          }
        }
      })
    ]
  },
};
