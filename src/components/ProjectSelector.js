const { htm } = require('@zeit/integration-utils')

module.exports = ({ tag = "H2" }) => {
  return htm`
  <${tag}>
    Please select a project
  </${tag}>
  <ProjectSwitcher />
  `
}
