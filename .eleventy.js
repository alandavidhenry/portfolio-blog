module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/scss')
  eleventyConfig.addPassthroughCopy('src/js')

  eleventyConfig.addWatchTarget('./src/css/')

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    templateFormats: ['md', 'njk'],
    htmlTemplateEngine: 'njk'
  }
}
