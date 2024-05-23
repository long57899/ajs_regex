import sum from './basic';

class Validator {
	validateUsername(username) {
			const usernameRegex = /^(?!^\d)[a-zA-Z0-9_-]+(?<![^\w-])$/;

			return usernameRegex.test(username) && !/\d{4,}/.test(username) && !/_$/.test(username);
	}
}

module.exports = Validator; 