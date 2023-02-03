const { merge } = require('../deps')
const common = require('../config/_common')
const server = require('../server')

module.exports = merge(common, {
    mode: 'development',
    watch: true,
    devtool: 'source-map',
    devServer: server
})

console.log(`Dev server is up and running at http://localhost`)
