const { appIdentifier } = require('../../constants')
const saveConfigurationError = require('./saveConfigurationError')
const saveConfigurationSuccess = require('./saveConfigurationSuccess')

module.exports = async ({ zeitClient, metadata }) => {
  try {
    await zeitClient.setMetadata(metadata)
    // throw new Error('Network unreachable.')  // HACK: Remove when testing proves this works automatically
    return saveConfigurationSuccess(metadata)
  } catch (e) {
    return saveConfigurationError(`${appIdentifier} ERROR - Unable to save metadata: ${e.message}`)
  }
}
