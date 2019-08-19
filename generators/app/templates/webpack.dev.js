const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const StartServerPlugin = require("start-server-webpack-plugin");

module.exports = merge(common, {
	mode: 'development',
	entry: ["webpack/hot/poll?1000"],
	watch: true,
	devtool: "source-map",
	externals: [
		nodeExternals({
			whitelist: ["webpack/hot/poll?1000"]
		})
	],
	plugins: [
		new StartServerPlugin("server.js"),
		new webpack.BannerPlugin({
			banner: 'require("source-map-support").install();',
			raw: true,
			entryOnly: false
		})

	],
})