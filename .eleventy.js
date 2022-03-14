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
  eleventyConfig.addFilter("dateFeed", require("./src/_11ty/filters/date.js").dateFeed);
  eleventyConfig.addFilter("dateFormat", require("./src/_11ty/filters/date.js").dateFormat);
  eleventyConfig.addFilter("dateFull", require("./src/_11ty/filters/date.js").dateFull);
  eleventyConfig.addFilter("dateIso", require("./src/_11ty/filters/date.js").dateIso);
  eleventyConfig.addFilter("dateYear", require("./src/_11ty/filters/date.js").dateYear);

  // COPY
  // -------------------------------
  eleventyConfig.addPassthroughCopy("./src/assets");

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
