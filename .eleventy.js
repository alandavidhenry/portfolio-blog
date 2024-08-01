module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    templateFormats: ['md', 'njk'],
    htmlTemplateEngine: 'njk'
  }
}
