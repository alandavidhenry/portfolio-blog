module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/scss')
  eleventyConfig.addPassthroughCopy('src/js')

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    templateFormats: ['md', 'njk'],
    htmlTemplateEngine: 'njk'
  }
}
