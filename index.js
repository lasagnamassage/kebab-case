'use strict';
var KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g;
var REVERSE_REGEX = /-[a-z\u00E0-\u00F6\u00F8-\u00FE]/g;

module.exports = exports = function kebabCase(str, leadingDashFlag) {
	let kebab = str.replace(KEBAB_REGEX, function (match) {
		return '-' + match
	});
  	let firstChar = kebab.charAt(1);
  	return (
      leadingDashFlag === false &&
      firstChar.toUpperCase() === firstChar
      	? kebab.slice(1).toLowerCase() : kebab.toLowerCase()
    );
};

exports.reverse = function (str) {
	return str.replace(REVERSE_REGEX, function (match) {
		return match.slice(1).toUpperCase();
	});
};
