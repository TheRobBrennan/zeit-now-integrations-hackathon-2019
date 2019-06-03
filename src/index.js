const { withUiHook } = require('@zeit/integration-utils')  // https://zeit.co/docs/integrations#htm-support/why-use-htm
const handler = require('./examples/04-google-analytics')

module.exports = withUiHook(handler)
