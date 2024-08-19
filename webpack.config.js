const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname,'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },
    devtool: 'inline-source-map',
    devServer:{
        static: path.resolve(__dirname, 'dist'),
        open: true,
        hot: true,
    },

    //loaders
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(svg|png|jpg|jpg)$/, type:'asset/resource'}
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'To Do List',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html')
        })]
}