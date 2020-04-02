const path = require("path");
const glob = require("glob");
const entries = {};
glob.sync("./**/*.ts", {
  cwd: "./src"
}).map((fileName) => {
  entries[fileName] = path.resolve("./src", fileName);
});
console.log(entries)
module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  context: __dirname,
  entry: entries,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js',
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        loader: "babel-loader",
      },
      {
        test: /\.(yml)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]"
            }
          }
        ]
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".json"],
    alias: {
      "@root": path.resolve(__dirname, "./"),
    },
  },
};
