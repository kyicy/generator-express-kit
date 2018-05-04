const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const path = require("path");
const nodeExternals = require("webpack-node-externals");
const StartServerPlugin = require("start-server-webpack-plugin");

module.exports = merge(common, {
	mode: 'production',
	externals: [
		nodeExternals()
	],
})
