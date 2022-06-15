const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");

module.exports = {
    entry: {
        main: "./src/js/index.js",
    },

    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        assetModuleFilename: "assets/img/[name][ext][query]", // without this assets used in js/css will go to main dir
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                type: "asset",
            },
        ],
    },
    plugins: [
        //https://webpack.js.org/plugins/html-webpack-plugin/
        //for updating script links in html - not needed when there is not much to update and can be done manually
        new HtmlWebpackPlugin({
            // title: "Production",
            filename: "index.html",
            alwaysWriteToDisk: true,
            template: "src/index.html",
        }),
        new HtmlWebpackPlugin({
            filename: "about.html",
            alwaysWriteToDisk: true,
            template: "src/about.html",
        }),
        new HtmlWebpackPlugin({
            filename: "contact.html",
            alwaysWriteToDisk: true,
            template: "src/contact.html",
        }),
        new HtmlWebpackPlugin({
            filename: "page_temp.html",
            alwaysWriteToDisk: true,
            template: "src/page_temp.html",
        }),
        new HtmlWebpackHarddiskPlugin(), //HtmlWebpackPlugin plugin to refresh html on change with dev server. Needs "alwaysWriteToDisk: true" option in HtmlWebpackPlugin config for every file in oder to work
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets"),
                    to: "./assets",
                },
            ],
        }),
    ],
};
