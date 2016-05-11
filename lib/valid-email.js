/*!
 * Valid Email - Validate email addresses without regular expressions.
 * Copyright(c) 2013 John Henry
 * @license MIT
 *
 * Inspired by:
 *     http://stackoverflow.com/questions/997078/email-regular-expression
 *     http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address
 *
 * @param {String} - potential email address
 * @return {Boolean}
 * @api public
 */
module.exports = function valid(email) {
	var at = email.search("@");
	if (at < 0) {
		return false;
	}

	var user = email.substr(0, at);
	var domain = email.substr(at + 1);
	var userLen = user.length;
	var domainLen = domain.length;

	// user part length exceeded
	if (userLen < 1 || userLen > 64) {
		return false;
	}

	// domain part length exceeded
	if (domainLen < 1 || domainLen > 255) {
		return false;
	}

	// user part starts or ends with '.'
	if (user.charAt(0) === '.' || user.charAt(userLen - 1) === '.') {
		return false;
	}

	// user part has two consecutive dots
	if (user.match(/\.\./)) {
		return false;
	}

	// character not valid in domain part
	if (!domain.match(/^[A-Za-z0-9.-]+$/)) {
		return false;
	}

	// domain part has two consecutive dots
	if (domain.match(/\\.\\./)) {
		return false;
	}

	if (!user.replace("\\\\", "").match(/^(\\\\.|[A-Za-z0-9!#%&`_=\\/$\'*+?^{}|~.-])+$/)) {
		if (!user.replace("\\\\", "").match(/^"(\\\\"|[^"])+"$/)) {
			return false;
		}
	}

	return true;
};
