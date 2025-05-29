module.exports = function(eleventyConfig) {
    // Copy static assets to the output directory
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("admin"); // Copy Netlify CMS files

    return {
        dir: {
            input: "./",          // Process files from the root directory
            includes: "_includes", // Look for layouts/partials in _includes
            data: "_data",        // Look for global data in _data
            output: "_site"       // Output to _site
        },
        templateFormats: ["html", "md", "liquid", "njk"], // Supported template formats
        markdownTemplateEngine: "liquid", // Use Liquid for Markdown files
        htmlTemplateEngine: "liquid",     // Use Liquid for HTML files
        dataTemplateEngine: "njk"         // Use Nunjucks for data files (optional, but good practice)
    };
};
