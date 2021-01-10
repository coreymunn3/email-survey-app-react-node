// use different keys depending on dev/prod environments
if (process.env.NODE_ENV === 'production') {
  // return prod keys
  module.exports = require('./prod');
} else {
  // return dev keys
  module.exports = require('./dev');
}
