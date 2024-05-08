function nodeChildCount(node, deep = Infinity) {
  let count = 0;
  function countChildren(node, level) {
    if (level > deep) return;
    const children = node.childNodes;
    count += children.length;
    for (let i = 0; i < children.length; i++) {
      countChildren(children[i], level + 1);
    }
  }
  countChildren(node, 1);
  return count;
}
