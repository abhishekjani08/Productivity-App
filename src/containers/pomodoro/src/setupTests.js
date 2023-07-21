const localStorageMock = (() => {
  let store = { darkMode: 'false' };
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    }
  };
})();

global.localStorage = localStorageMock;
