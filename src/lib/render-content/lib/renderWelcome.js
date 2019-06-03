const { htm } = require('@zeit/integration-utils')
const { appIdentifier } = require('../../constants')
const log = require('../../log/log')
const Welcome = require('../../../components/Welcome')

module.exports = () => {
  log.message({ message: `${appIdentifier} rendering Welcome` })
  return htm`
    <${Welcome} message=${"Welcome"} tag=${"H1"} />
    <P>Use this integration to configure Google Analytics with your ZEIT Now projects.</P>
    <P>
      If you choose to save to
      <B>an existing ZEIT Now secret</B>
      associated with your account,
      <B>it will be overwritten.</B>
    </P>
  `
}