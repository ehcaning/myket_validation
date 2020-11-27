const axios = require('axios').default;

class Myket {
	/**
	 * Get an instance
	 * @constructs
	 * @param {string} access_token
	 * @param {string} package_name
	 * @returns {Myket}
	 */
	constructor(access_token, package_name) {
		/**
		 * Your access_token From Myket
		 * @private
		 */
		this.access_token = access_token;
		/**
		 * Your package_name From Myket
		 * @private
		 */
		this.package_name = package_name;
	}

	/**
	 * Validate Payment
	 * @param {string} sku
	 * @param {string} token
	 * @returns {Promise<{status: Number, data: {consumptionState: Number, purchaseState: Number, kind: string, developerPayload: string, purchaseTime: Number}}>}
	 */
	async validate(sku, token) {
		try {
			const response = await axios({
				method: 'get',
				headers: { 'X-Access-Token': this.access_token },
				url: `https://developer.myket.ir/api/applications/${this.package_name}/purchases/products/${sku}/tokens/${token}`,
			});

			return {
				status: response.status,
				data: response.data,
			};
		} catch (err) {
			return {
				status: err.response.status,
				data: err.response.data,
			};
		}
	}
}

module.exports = getInstance;

/**
 * Get Instance of Myket
 * @param {string} access_token
 * @param {string} package_name
 * @returns {Myket}
 */
function getInstance(access_token, package_name) {
	return new Myket(access_token, package_name);
}
