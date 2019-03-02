const path = require(`path`);

module.exports = {
	mode: `development`,
	entry: `./src/index.js`,
	output: {
		filename: `bundle.js`,
		path: path.join(__dirname, `app`)
	},
	devtool: `source-map`,
	devServer: {
		contentBase: path.join(__dirname, `app`),
		publicPath: `http://localhost:8080/`
	}
};