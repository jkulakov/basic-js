const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let dnsObj = {};

  domains.forEach(item => {
    let urlArr = item.split('.').reverse();
    let dnsName = '';

    urlArr.forEach(it => {
      dnsName = `${dnsName}.${it}`;
      if(dnsObj[dnsName]) {
        dnsObj[dnsName]++;
      } else {
        dnsObj[dnsName] = 1;
      }
    });
  });

  return dnsObj;
}

module.exports = {
  getDNSStats
};
