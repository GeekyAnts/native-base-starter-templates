const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "react-native": "react-native-web",
      "@expo/vector-icons": "react-native-vector-icons-for-web",
    },
    module: {
      loaders: {
        test: /\.ttf$/,
        loader: "url-loader", // or directly file-loader
        include: path.resolve(
          __dirname,
          "node_modules/react-native-vector-icons"
        ),
      },
    },
  },
};
