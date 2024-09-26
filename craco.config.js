const path = require("path");
const CracoLessPlugin = require("craco-less");
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  webpack: {
    alias: {
      // 使用 @ 表示 src 文件所在路径
      "@": path.resolve(__dirname, "src"),
    },
    // plugins: [new BundleAnalyzerPlugin()],
    devtool: process.env.NODE_ENV === "development" ? "cheap-module-source-map" : "source-map",
    plugins: [
      sentryWebpackPlugin({
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: "sentry-wbf",
        project: "lego-front",
      }),
    ],
  },
  devServer: {
    // 在开发环境下，使用代理
    port: 3000,
    proxy: {
      // 选项写法
      "/api": {
        target: "http://lego.api.lytt.fun", // 目标地址
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务器，然后发送请求的数据，会同时会收到请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/api": "/api", // 路径重写，移除路径中的/api
        },
      },
    },
  },
  plugins: [{ plugin: CracoLessPlugin }],
};
