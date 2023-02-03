const { merge, CssMinimizerPlugin, CleanWebpackPlugin, TerserPlugin } = require('webpack/deps')
const common = require('./_common')

// Plugins
const plugins = [
    /**
     * Remove/clean build folder(s).
     */
    new CleanWebpackPlugin()
]

// Config
module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(), // Minimize JS output
            new CssMinimizerPlugin() // Minify CSS output
        ]
    },
    plugins: plugins
})
console.log('Production mode running...')

