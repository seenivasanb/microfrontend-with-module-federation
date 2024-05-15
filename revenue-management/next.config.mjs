import NextFederationPlugin from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "revenue-management",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            host: "host@http://localhost:3001/_next/static/chunks/remoteEntry.js",
          },
          exposes: {
            "./title": "./src/components/RemoteHeader.jsx",
            "./grid": "./src/components/RevenueGrid/RevenueGrid.jsx",
          },
        })
      );
    }
    return config;
  },
};

export default nextConfig;
