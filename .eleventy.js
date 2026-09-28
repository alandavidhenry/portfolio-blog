const htmlmin = require('html-minifier')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/scss')
  eleventyConfig.addPassthroughCopy('src/js')
  eleventyConfig.addPassthroughCopy('src/images')
  eleventyConfig.addPassthroughCopy({ 'src/public': '/' })
  eleventyConfig.addPassthroughCopy('./src/admin')
  eleventyConfig.addPassthroughCopy('./src/posts')
  eleventyConfig.addPassthroughCopy('./src/public')

  eleventyConfig.addWatchTarget('./src/css/')

  eleventyConfig.addCollection('blog', function (collection) {
    return collection.getFilteredByGlob('./src/posts/blog/*.md')
  })

  // UK date format filter
  eleventyConfig.addFilter('dateFilter', function (date) {
    return new Date(date).toLocaleDateString('en-UK', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  })

  // ISO date format filter, e.g. 2024-10-25
  eleventyConfig.addFilter('isoDate', function (date) {
    return new Date(date).toISOString().slice(0, 10)
  })

  // Zero-pad reference numbers, e.g. 7 -> 07
  eleventyConfig.addFilter('pad', function (value, length = 2) {
    return String(value).padStart(length, '0')
  })

  // Estimated reading time in minutes
  eleventyConfig.addFilter('readingTime', function (content) {
    const words = String(content)
      .replace(/<[^>]*>/g, ' ')
      .split(/\s+/)
      .filter(Boolean).length
    return Math.max(1, Math.round(words / 200))
  })

  // First n items of an array
  eleventyConfig.addFilter('head', function (array, n) {
    return array.slice(0, n)
  })

  // Build date for the document revision stamp and copyright year
  const buildDate = new Date()
  eleventyConfig.addGlobalData('build', {
    year: buildDate.getFullYear(),
    revision: `${buildDate.getFullYear()}.${String(buildDate.getMonth() + 1).padStart(2, '0')}`
  })

  // Minify HTML output
  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (outputPath && outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
      return minified
    }
    return content
  })

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    templateFormats: ['md', 'njk'],
    htmlTemplateEngine: 'njk'
  }
}
