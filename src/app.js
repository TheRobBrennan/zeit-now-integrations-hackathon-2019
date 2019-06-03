const { htm } = require('@zeit/integration-utils')

// Useful functions and libraries
const configuration = require('./lib/configuration/configuration')
const log = require('./lib/log/log')
const renderContent = require('./lib/render-content/renderContent')
const {
  appIdentifier,
  supportedActions,
} = require('./lib/constants')

module.exports = async ({ payload, zeitClient }) => {
  let metadata
  let secretName
  const { action, clientState } = payload
  const { readConfiguration, saveConfiguration } = configuration

  // Logging
  log.message({
    message: `${appIdentifier} Application handler received
  action  -> ${action}`,
  })

  // Initialize metadata store for this specific integration configuration (max size 100 KB)
  try {
    metadata = await readConfiguration({ zeitClient })
  } catch (error) {
    log.error({ error })
  }

  // Create our secret
  try {
    const { projectId } = payload

    if (action === supportedActions['create-ga-secret'] && projectId) {
      const {
        'ga-tracking-id': trackingID,
        'zeit-now-secret': secretForZEITNow,
      } = clientState

      const googleAnalyticsTrackingID = trackingID || ''
      const zeitNowSecretForGoogleAnalyticsTrackingID = secretForZEITNow || ''

      // Logging
      log.entity({
        obj: zeitClient,
        label: `${appIdentifier} renderContent received zeitClient `,
      })

      log.message({
        message: `${appIdentifier} upsert ATTEMPT with
      projectId -> ${projectId}
      googleAnalyticsTrackingID -> ${googleAnalyticsTrackingID}
      zeitNowSecretForGoogleAnalyticsTrackingID - ${zeitNowSecretForGoogleAnalyticsTrackingID}
      `,
      })

      // This gives us something like delete-this-test-secret-a94a8fe5cc
      secretName = await zeitClient.ensureSecret(
        zeitNowSecretForGoogleAnalyticsTrackingID,
        googleAnalyticsTrackingID
      )
      log.message({ message: `${appIdentifier} secretName: ${secretName}` })
      await zeitClient.upsertEnv(
        projectId,
        googleAnalyticsTrackingID,
        secretName
      )
      log.message({ message: `${appIdentifier} upsert COMPLETE` })
    }
  } catch (error) {
    log.message({
      message: `${appIdentifier} Application handler upsert FAILED`,
    })
    log.error({ error })
  }

  // Store our metadata for this specific integration configuration
  try {
    await saveConfiguration({ zeitClient, metadata })
  } catch (error) {
    log.error({ error })
  }

  return htm`<Page>${renderContent({
    action,
    clientState,
    payload,
    zeitClient,
    secretName,
  })}</Page>`
}
