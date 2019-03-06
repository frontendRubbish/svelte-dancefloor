const sass = require('node-sass');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var config = {
	entry: {
		bundle: ['./src/main.js']
	},
	resolve: {
		extensions: ['.js', '.html']
	},
	output: {
		path: __dirname + '/public',
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
			{
					test: /\.(html|js)$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
					options: {
							presets: ['@babel/preset-env']
					}
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCSS: true,
						preprocess: {
							style: ({ content, attributes }) => {
								if (attributes.type !== 'text/scss') return;

								return new Promise((fulfil, reject) => {
									sass.render({
										data: content,
										includePaths: ['src'],
										sourceMap: true,
										outFile: 'x' // this is necessary, but is ignored
									}, (err, result) => {
										if (err) return reject(err);

										fulfil({
											code: result.css.toString(),
											map: result.map.toString()
										});
									});
								});
							}
						}
					}
				}
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	]
};

module.exports = (env, argv) => {
	config.module.rules.push(
		{
			test: /\.css$/,
			use: [
				( argv.mode === 'production' ) ? MiniCssExtractPlugin.loader : 'style-loader',
				'css-loader'
			]
		}
	)

	return config;
};
