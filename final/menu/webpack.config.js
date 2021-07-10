module.exports = {
    devtool: "source-map",
    watch: true,
    entry: {
        filename: "./app.js",
    },
    output: {
        filename: "app.js",
    },
     module: {
        rules: [
            {
                test: /\.js$/,
                excloude: /node-modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    }
                }
            }
        ]
     }

}