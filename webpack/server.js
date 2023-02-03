const path = require('path')
const port = 8000
const host = process.env.HOST || 'localhost'

export default {
    host,
    port: port,
    static: path.join(__dirname, 'build'),
    compress: true,
    hot: true,
    liveReload: true
}