function template({ template }, opts, { imports, componentName, props, jsx, exports }) {
  return template.ast`
    ${imports}
    export default (${props}) => ${jsx}
  `
}
module.exports = template
