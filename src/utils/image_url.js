export default function(url) {
    if (/^http/.exec(url)) {
      return url;
    } else {
      let prefix = window.__env && window.__env.REACT_APP_API_PREFIX || process.env.REACT_APP_API_PREFIX || 'http://localhost:8080';
      return prefix + url;
    }
}
