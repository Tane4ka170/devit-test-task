function mapper(rules) {
  return function (obj) {
    return rules.reduce((newObj, rule) => {
      const [oldKey, newKey, transformFunc] = rule;
      newObj[newKey] = transformFunc ? transformFunc(obj[oldKey]) : obj[oldKey];
      return newObj;
    }, {});
  };
}
