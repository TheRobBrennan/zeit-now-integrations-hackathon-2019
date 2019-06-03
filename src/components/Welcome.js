const { htm } = require('@zeit/integration-utils')

module.exports = ({ message, tag }) => htm`<${tag}>${message}</${tag}>`