var pluralize = require('pluralize');

module.exports = function required(container) {
  var missingFields = [];

  for (var i = 1; i < arguments.length; i++) {
    var field = arguments[i];
    if (typeof field !== 'string') {
      throw new Error('Field name must be string');
    }

    var value = container[field];
    if (value === null || value === undefined) {
      missingFields.push(field);
    }
  }

  if (missingFields.length) {
    var fieldList = missingFields.join(', ');
    var fieldWord = pluralize('field', missingFields.length);
    throw new Error(`Missing ${fieldWord}: ${fieldList}`);
  }
};
