// Imports: Dependencies
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

// Webpack Configuration
const config = {
  // Entry
  entry: "./src/main.js",
  // Output
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  mode: "development",
  // Loaders
  module: {
    rules: [
      // JavaScript/JSX Files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      // CSS Files
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      // FONT FILES
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "webfonts/"
            }
          }
        ]
      }
    ]
  },
  // Plugins
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    })
  ],

  performance: {
    hints: false
  }
};
// Exports
module.exports = config;
