module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/scss')
  eleventyConfig.addPassthroughCopy('src/js')
  eleventyConfig.addPassthroughCopy({ 'src/public': '/' })
  eleventyConfig.addPassthroughCopy('./src/admin')
  eleventyConfig.addPassthroughCopy('./src/posts')

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
