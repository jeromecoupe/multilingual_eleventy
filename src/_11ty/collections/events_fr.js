module.exports = function(collection) {
  return collection.getFilteredByGlob("./src/content/fr/events/*.md");
}