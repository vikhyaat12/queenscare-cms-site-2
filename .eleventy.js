const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Netlify CMS ke liye admin folder ko output (_site/admin) me copy karega
  eleventyConfig.addPassthroughCopy("admin");

  // Date filter for Nunjucks templates
  eleventyConfig.addFilter("date", (dateObj, format = "yyyy-LL-dd") => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat(format);
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
