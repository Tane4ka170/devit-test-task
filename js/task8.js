String.prototype.removeDuplicate = function () {
  const words = this.split(" ");
  const uniqueWords = new Set(words);
  return [...uniqueWords].join(" ");
};
