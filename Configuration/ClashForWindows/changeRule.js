module.exports.parse = (raw, { yaml, notify }) => {
  notify("profile has been modified.", "Personal rules has been added.", true)
  const rawObj = yaml.parse(raw)
  rawObj['rules'] = rawObj['rules'].filter(function (item) {
    return item.search("v2ex") === -1
  })
  return yaml.stringify(rawObj)
}