const readConfiguration = require('./lib/readConfiguration')
const readConfigurationError = require('./lib/readConfigurationError')
const readConfigurationSuccess = require('./lib/readConfigurationSuccess')
const saveConfiguration = require('./lib/saveConfiguration')
const saveConfigurationError = require('./lib/saveConfigurationError')
const saveConfigurationSuccess = require('./lib/saveConfigurationSuccess')

module.exports = {
  readConfiguration,
  readConfigurationError,
  readConfigurationSuccess,
  saveConfiguration,
  saveConfigurationError,
  saveConfigurationSuccess,
}