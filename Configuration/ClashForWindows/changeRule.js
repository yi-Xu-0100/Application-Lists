module.exports.parse = (raw, { yaml, notify }) => {
  const rawObj = yaml.parse(raw);
  rawObj['rules'] = rawObj['rules'].filter(function (item) {
    return item.search("v2ex") === -1;
  });
  rawObj['rules'].unshift("DOMAIN-SUFFIX,v2ex.com,DIRECT");
  notify("profile has been modified.", "Personal rules has been added.", true);
  return yaml.stringify(rawObj);
}