const { dotenv } = require('../deps')
const { paths } = require('../paths')
const { plugins } = require('../plugins')
const { buildJs, buildCss, bundleImg, bundleFonts } = require('../scripts')

const entry = paths.entry
const output = { path: paths.build, filename: './js/[name].bundle.js' }

dotenv.config({ path: '../.env' })

const rules = [
    { ...buildJs },
    { ...buildCss },
    { ...bundleImg },
    { ...bundleFonts }
]

module.exports = {
    entry: entry,
    output: output,
    module: { rules: rules },
    plugins: plugins
}

console.log('Hello, from Common!')

