const parsedPair = (key, params) => (
  `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
);

export default (base, params = {}) => {
  const keys = Object.keys(params);

  return keys
    .filter(key => params[key])
    .reduce((url, key, index) => (
      `${url}${index ? '&' : '?'}${parsedPair(key, params)}`
    ), base);
};
