/* jshint esversion: 6 */

'use strict';
const fallback = require('connect-history-api-fallback');
const log = require('connect-logger');
/*
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 */
module.exports = {
  port: 8000,
  /* open: false, */
  injectChanges: false, // workaround for Angular 2 styleUrls loading
  filters: ['./**/*.{html,htm,css,js}'],
  watchOptions: {
    ignored: 'node_modules'
  },
  server: ['./dist'],
  middleware: [
    log({ format: '%date %status %method %url' }),
    fallback({
      index: '/index.html',
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'] // systemjs workaround
    })
  ]
};
