const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Netlify CMS के लिए admin folder को output (_site/admin) में copy करेगा
  eleventyConfig.addPassthroughCopy("admin");

  // Date filter for Nunjucks templates
  eleventyConfig.addFilter("date", (dateObj, format = "yyyy-LL-dd") => {
    // dateObj को JS Date में safely बदलो
    let jsDate;
    if (!dateObj) return "";
    if (typeof dateObj === "string" || typeof dateObj === "number") {
      jsDate = new Date(dateObj);
    } else {
      jsDate = dateObj;
    }
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
