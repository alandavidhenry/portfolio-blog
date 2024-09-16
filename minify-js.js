const fs = require('fs')
const path = require('path')
const { minify } = require('terser')

const inputDir = './src/js'
const outputDir = './dist/js'

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

fs.readdirSync(inputDir).forEach(async (file) => {
  if (path.extname(file) === '.js') {
    const inputPath = path.join(inputDir, file)
    const outputPath = path.join(outputDir, file)

    const code = fs.readFileSync(inputPath, 'utf8')
    const minified = await minify(code)

    fs.writeFileSync(outputPath, minified.code)
    console.log(`Minified ${file}`)
  }
})
