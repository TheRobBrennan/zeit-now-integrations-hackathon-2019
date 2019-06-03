const { withUiHook } = require('@zeit/integration-utils')  // https://zeit.co/docs/integrations#htm-support/why-use-htm
const handler = require('./app')

module.exports = withUiHook(handler)
