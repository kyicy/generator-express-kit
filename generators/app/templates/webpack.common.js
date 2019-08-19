const webpack = require("webpack");
const path = require("path");

const {CleanWebpackPlugin} = require("clean-webpack-plugin");


module.exports = {
	entry: ["./src/index"],
    target: "node",
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },    
	node: {
		__filename: true,
		__dirname: true
	},
	module: {
		rules: [{
			test: /\.(ts|js)x?$/,
			use: [{
				loader: "babel-loader",
			}],
			exclude: /node_modules/
		}]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
    ],
    optimization: {
        namedModules: true,
        noEmitOnErrors: true,
    },
	output: {
		path: path.join(__dirname, "dist"),
		filename: "server.js"
	}
};