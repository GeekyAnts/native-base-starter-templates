const { withExpo } = require("@expo/next-adapter");
const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "react-native-web",
  "native-base",
]);

const nextConfig = {
  async redirects() {
    return [
      {
        // this will match `/english(default)/something` being requested
        source: "/",
        destination: "/sign-up",
        permanent: false,
      },
    ];
  },
};

module.exports = withPlugins(
  [
    withTM,
    [withFonts, { projectRoot: __dirname }],
    [withExpo, { projectRoot: __dirname }],
  ],
  nextConfig
);
