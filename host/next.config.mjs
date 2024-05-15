import NextFederationPlugin from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "host",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            "asset-management":
              "asset-management@http://localhost:3002/_next/static/chunks/remoteEntry.js",
          },
          exposes: {
            "./header": "./src/components/Header/Header.jsx",
            "./sidebar": "./src/components/Sidebar/Sidebar.jsx",
          },
        })
      );
    }
    return config;
  },
};

export default nextConfig;
