const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Netlify CMS के लिए admin folder और अन्य assets copy करें
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("assets");

  // Date filter for Nunjucks templates
  eleventyConfig.addFilter("date", (dateObj, format = "yyyy-LL-dd") => {
    if (!dateObj) return "";
    let jsDate = typeof dateObj === "string" || typeof dateObj === "number"
      ? new Date(dateObj)
      : dateObj;
    return DateTime.fromJSDate(jsDate, { zone: "utc" }).toFormat(format);
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
