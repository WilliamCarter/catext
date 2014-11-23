requirejs.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/src/',

  paths: {},

  shim: {},

  deps: ["/base/test/jext-spec.js"],

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
