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

  eleventyConfig.addFilter('dateFilter', function (date) {
    return new Date(date).toLocaleDateString('en-UK', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
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
