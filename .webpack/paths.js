const path = require('path')

const paths = {
    // Entry point
    entry: path.resolve(__dirname, '../app/index.js'),
    // Source files
    app: path.resolve(__dirname, '../app'),
    // Production ready files
    build: path.resolve(__dirname, '../build'),
    // Static assets
    static: path.resolve(__dirname, '../static')
}

module.exports = { paths }
