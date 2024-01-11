const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  basePath: "/MFHost",
  output: "export",
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "host",
          filename: "static/chunks/remoteEntry.js",
        })
      );
    }

    return config;
  },
};
