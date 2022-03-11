module.exports = function(collection) {
  return collection.getFilteredByGlob("./src/content/en/events/*.md");
}