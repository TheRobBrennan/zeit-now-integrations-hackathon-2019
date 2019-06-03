const { appIdentifier, supportedActions } = require('../constants')
const { htm } = require('@zeit/integration-utils')
const log = require('../log/log')

// Render functions
const renderGAConfiguration = require('./lib/renderGAConfiguration')
const renderWelcome = require('./lib/renderWelcome')

module.exports = ({ action, clientState, payload, zeitClient, secretName }) => {
  let output

  // Logging
  log.message({ message: `${appIdentifier} renderContent received
  action  -> ${action}`})
  log.entity({ obj: clientState, label: `${appIdentifier} renderContent received clientState ` })

  // log.entity({ obj: payload, label: `${appIdentifier} renderContent received payload ` })
  log.message({ message: `${appIdentifier} renderContent received payload` })

  // log.entity({ obj: zeitClient, label: `${appIdentifier} renderContent received zeitClient ` })
  log.message({ message: `${appIdentifier} renderContent received zeitClient` })

  switch (action) {
    case supportedActions["create-ga-secret"]: // Create Google Analytics secret
      if (secretName) {
        output = htm`
          <H1>Thanks</H1>
          <P>You may now use your newly created secret
            <B>${secretName}</B>
          </P>
          <P>Please see example usage below.</P>
          <Code>
// now.json
:
"env": {
  "GOOGLE_ANALYTICS_TRACKING_ID": "@${secretName}"
},
:
          </Code>
        `
      } else {
        output = htm`<H1>Whoops. Something bad happened. Please try again.</H1>`
      }
      break
    case supportedActions.view:  // Initial load
      output = htm`${renderWelcome()} ${renderGAConfiguration({ clientState, payload, action, zeitClient })}`
      break
    default:
      break
  }

  return htm`${output}`
}