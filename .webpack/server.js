const path = require('path')
const host = process.env.HOST || 'localhost'

export default {
    host,
    static: path.join(__dirname, 'build'),
    compress: true,
    hot: true,
    liveReload: true,
}