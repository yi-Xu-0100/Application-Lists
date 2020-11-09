module.exports.parse = (raw, { yaml, notify }) => {
  const rawObj = yaml.parse(raw);
  const { Rule: rules = [], 'Proxy Group': groups = [], Proxy: proxies = [] } = rawObj;
  delete rawObj['Rule'];
  delete rawObj['Proxy Group'];
  delete rawObj['Proxy'];
  notify('Clash for windows', 'profile has been modified.', true);
  return yaml.stringify({ ...rawObj, proxies, 'proxy-groups': groups, rules });
};
