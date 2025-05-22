module.exports = function(eleventyConfig) {
  // Netlify CMS ke liye admin folder ko output (_site/admin) me copy karega
  eleventyConfig.addPassthroughCopy("admin");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
