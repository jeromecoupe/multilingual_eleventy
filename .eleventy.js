module.exports = function(eleventyConfig) {
  // COLLECTIONS
  // -------------------------------

  // EN
  eleventyConfig.addCollection("events_en", require("./src/_11ty/collections/events_en.js"));
  
  eleventyConfig.addCollection("posts_en", require("./src/_11ty/collections/posts_en.js"));

  // FR
  eleventyConfig.addCollection("events_fr", require("./src/_11ty/collections/events_fr.js"));
  
  eleventyConfig.addCollection("posts_fr", require("./src/_11ty/collections/posts_fr.js"));

  // FILTERS
  // -------------------------------
  eleventyConfig.addFilter("dateFeed", require("./src/_11ty/filters/dateFeed.js"));
  eleventyConfig.addFilter("dateFormat", require("./src/_11ty/filters/dateFormat.js"));
  eleventyConfig.addFilter("dateFull", require("./src/_11ty/filters/dateFull.js"));
  eleventyConfig.addFilter("dateIso", require("./src/_11ty/filters/dateIso.js"));
  eleventyConfig.addFilter("dateYear", require("./src/_11ty/filters/dateYear.js"));

  // CONFIG
  // -------------------------------
  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
