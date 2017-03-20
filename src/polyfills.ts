import 'core-js/es6';
import 'core-js/es7/reflect';
require('../node_modules/zone.js/dist/zone');

if (process.env.ENV === 'production') {
  // Production
} else {
  // Development and test
  Error['stackTraceLimit'] = Infinity;
  require('../node_modules/zone.js/dist/long-stack-trace-zone');
}
