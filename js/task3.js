function bulkRun(functionsWithArgs) {
  return Promise.all(
    functionsWithArgs.map(([fn, args]) => {
      return new Promise((resolve, reject) => {
        try {
          fn(...args, (result) => resolve(result));
        } catch (error) {
          reject(error);
        }
      });
    })
  );
}
