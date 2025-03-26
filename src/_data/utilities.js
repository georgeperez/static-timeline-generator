const moment = require('moment');

const sentenceCase = function (str) {
  if (typeof str !== 'string' || !str.length) {
    return str;
  }
  str = str.replace(/-/g, ' ');
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

const sentenceCaseCapitalize = function (str) {
  if (typeof str !== 'string' || !str.length) {
    return str;
  }
  str = str.replace(/-/g, ' ');
  return str;
};

const humanizeDate = function (datetime, date) {
  const m = moment(datetime || date);
  if (datetime) {
    return m.locale("es-us").format('LLL');
  }
  return m.locale("es-us").format('LL');
};

const isWrappedInParagraphTags = function (html) {
  if (typeof html !== 'string') {
    return false;
  }
  return html.substring(0, 3) === '<p>';
};

module.exports = {
  sentenceCase,
  sentenceCaseCapitalize,
  humanizeDate,
  isWrappedInParagraphTags,
};
