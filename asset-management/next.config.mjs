import NextFederationPlugin from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "asset-management",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          host: `host@http://localhost:3001/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        exposes: {
          "./title": "./src/components/RemoteHeader.jsx",
          "./grid": "./src/components/AssetGrid/AssetGrid.jsx",
        },
      })
    );

    return config;
  },
};

export default nextConfig;
