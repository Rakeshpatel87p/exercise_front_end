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
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [HtmlWebpackPluginConfig]
}
