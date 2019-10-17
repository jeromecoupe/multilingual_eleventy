const moment = require("moment");

module.exports = function(eleventyConfig) {
  // COLLECTIONS
  // -------------------------------

  // events EN
  eleventyConfig.addCollection("events_en", function(collection) {
    return collection.getFilteredByGlob("./src/en/events/*.md");
  });

  // events FR
  eleventyConfig.addCollection("events_fr", function(collection) {
    return collection.getFilteredByGlob("./src/fr/events/*.md");
  });

  // posts EN
  eleventyConfig.addCollection("posts_en", function(collection) {
    return collection.getFilteredByGlob("./src/en/posts/*.md");
  });

  // posts FR
  eleventyConfig.addCollection("posts_fr", function(collection) {
    return collection.getFilteredByGlob("./src/fr/posts/*.md");
  });

  // FILTERS
  // -------------------------------

  // date filter
  eleventyConfig.addNunjucksFilter("date", function(date, format, locale) {
    locale = locale ? locale : "en";
    moment.locale(locale);
    return moment(date).format(format);
  });

  // Base config
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
