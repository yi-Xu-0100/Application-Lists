module.exports.parse = (raw, { yaml, notify, console }) => {
  var rawObj = yaml.parse(raw);
  rawObj['rules'].unshift("DOMAIN-SUFFIX,manhuabudang.com,DIRECT");
  console.log('[INFO]First rule added: ' + rawObj['rules'][0]);
  rawObj['rules'].unshift("DOMAIN-SUFFIX,v2ex.com,DIRECT");
  console.log('[INFO]First rule added: ' + rawObj['rules'][0]);
  rawObj['rules'].unshift("DOMAIN-SUFFIX,osapublishing.org,Proxies");
  console.log('[INFO]First rule added: ' + rawObj['rules'][0]);
  rawObj['rules'].unshift("DOMAIN-SUFFIX,phicomm.me,DIRECT");
  console.log('[INFO]First rule added: ' + rawObj['rules'][0]);
  notify("profile has been modified.", "Personal rules has been added.", true);
  return yaml.stringify(rawObj);
}