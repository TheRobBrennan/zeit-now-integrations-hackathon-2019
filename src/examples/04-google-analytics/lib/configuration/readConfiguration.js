const { appIdentifier } = require('../constants')
const readConfigurationError = require('./readConfigurationError')
const readConfigurationSuccess = require('./readConfigurationSuccess')

module.exports = async (zeitClient) => {
  let metadata = {}

  try {
    metadata = await zeitClient.getMetadata()
    // throw new Error('Network unreachable.')  // TODO: Remove when testing proves this works automatically
    return readConfigurationSuccess(metadata)
  } catch (e) {
    return readConfigurationError(`${appIdentifier} ERROR - Unable to read metadata: ${e.message}`)
  }
}
