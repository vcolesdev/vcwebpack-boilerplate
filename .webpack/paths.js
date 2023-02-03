const path = require('path')

const paths = {
    // Entry point
    entry: path.resolve(__dirname, '../src/index.js'),
    // Source files
    app: path.resolve(__dirname, '../src'),
    // Production ready files
    build: path.resolve(__dirname, '../build'),
    // Static assets
    public: path.resolve(__dirname, '../public')
}

module.exports = { paths }
