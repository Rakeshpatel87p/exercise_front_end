const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filname: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './app/main.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'main_bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [HtmlWebpackPluginConfig]
}
