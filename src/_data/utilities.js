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

const humanizeDate = function (datetime, date, endDatetime, endDate) {
  const startDateStr = datetime || date;
  const startM = moment(startDateStr);
  
  // Helper function to determine date format based on precision
  const getDateFormat = (dateStr, momentObj, hasTime) => {
    if (hasTime) {
      return momentObj.locale("es-us").format('LLL');
    }
    
    // Check if date is year only
    if (dateStr && dateStr.match(/^\d{4}$/)) {
      return momentObj.locale("es-us").format('YYYY');
    }
    
    // Check if date is year-month only (no day specified)
    if (dateStr && dateStr.match(/^\d{4}-\d{2}$/)) {
      return momentObj.locale("es-us").format('MMMM [de] YYYY');
    }
    
    // Default full date format
    return momentObj.locale("es-us").format('LL');
  };
  
  // If no end date is provided, return the original single date format
  if (!endDatetime && !endDate) {
    return getDateFormat(startDateStr, startM, !!datetime);
  }
  
  // If end date is provided, format as date range
  const endDateStr = endDatetime || endDate;
  const startFormatted = getDateFormat(startDateStr, startM, !!datetime);
  
  // Handle "present" case - if endDate is empty string or "present"
  if (endDateStr === '' || endDateStr === 'present' || endDateStr === 'presente') {
    return startFormatted + ' - presente';
  }
  
  const endM = moment(endDateStr);
  const endFormatted = getDateFormat(endDateStr, endM, !!endDatetime);
  
  return startFormatted + ' - ' + endFormatted;
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
