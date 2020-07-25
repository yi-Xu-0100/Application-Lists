module.exports.parse = (raw, { yaml, notify }) => {
  notify("Clash for windows", "profile has been modified.", true)
  const rawObj = yaml.parse(raw)
  const { 'Rule': rules = [], 'Proxy Group': groups = [], 'Proxy': proxies = [] } = rawObj
  delete rawObj['Rule']
  delete rawObj['Proxy Group']
  delete rawObj['Proxy']
  rules.push("DOMAIN-SUFFIX,93book.com,Others")
  return yaml.stringify({ ...rawObj, proxies, 'proxy-groups': groups, rules })
}