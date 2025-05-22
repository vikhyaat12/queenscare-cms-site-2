module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("src/styles");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "../content",
      output: "_site"
    }
  };
};