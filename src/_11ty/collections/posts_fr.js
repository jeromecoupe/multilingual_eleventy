module.exports = function(collection) {
  return collection.getFilteredByGlob("./src/content/fr/posts/*.md");
}