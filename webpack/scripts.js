const { MiniCssExtractPlugin } = require('./deps')

/**
 * Process Javascript files.
 * @type {{test: RegExp, use: string, exclude: RegExp}}
 */
const buildJs = {
    test: /\.(js|ts)$/,
    exclude: /node_modules/,
    use: 'babel-loader'
}

/**
 * Process CSS, SCSS files.
 * @type {{test: RegExp, use: [string,{loader: string, options: {}},{loader: string, options: {}},{loader: string, options: {}},{loader: string, options: {sourceMap: boolean}}]}}
 */
const buildCss = {
    test: /\.(scss|css)$/,
    use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: {} }, // Translates CSS into CommonJS
        { loader: 'postcss-loader', options: {} }, // Transform styles with JS plugins
        { loader: 'resolve-url-loader', options: {} }, // Allows for a distributed set of SCSS files
        { loader: 'sass-loader', options: { sourceMap: true } } // Compiles Sass to CSS
    ]
}

/**
 * Process images.
 * @type {{test: RegExp, generator: {filename: string}, type: string}}
 */
const bundleImg = {
    test: /\.(png|jpg|jpeg|gif|svg)$/,
    type: 'asset/resource',
    generator: { filename: 'images/[name].[ext]' }
}

/**
 * Process font files.
 * @type {{test: RegExp, generator: {filename: string}, type: string}}
 */
const bundleFonts = {
    test: /\.(ttf|eot|woff|woff2|svg)$/,
    type: 'asset/resource',
    generator: { filename: 'fonts/local/[name].[ext]' }
}

module.exports = { buildJs, buildCss, bundleImg, bundleFonts }