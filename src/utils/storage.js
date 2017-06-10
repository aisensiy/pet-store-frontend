let localStorage;

if (process.env.NODE_ENV === 'test') {
  localStorage = {
    setItem: () => {},
    removeItem: () => {},
    getItem: () => {}
  }
} else {
  localStorage = window.localStorage;
}

export default localStorage;
