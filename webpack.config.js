const path = require("path");
const globEntry = require("webpack-glob-entry");

module.exports = {
    entry: globEntry("./public/scripts/**/*.ts"),
    mode: "production",
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, "./public/scripts")],
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            configFile: path.resolve(
                                __dirname,
                                "./public/scripts/tsconfig.json"
                            ),
                        },
                    },
                ],
            },
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist/public/scripts/"),
    },
};
