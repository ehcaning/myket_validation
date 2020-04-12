const axios = require('axios').default;

class Myket {
    constructor(access_token, package_name) {
        this.access_token = access_token;
        this.package_name = package_name;
    }

    validate = (sku, token) => new Promise(async (resolve, reject) => {
        try {
            axios({
                method: 'get',
                headers: { 'X-Access-Token': this.access_token },
                url: `https://developer.myket.ir/api/applications/${this.package_name}/purchases/products/${sku}/tokens/${token}`
            })
                .then(response => {
                    let ret = {
                        status: response.status,
                        data: response.data
                    };
                    return resolve(ret);
                })
                .catch(err => {
                    let ret = {
                        status: err.response.status,
                        data: err.response.data
                    };
                    return resolve(ret);
                })
        } catch (err) {
            return resolve(err);
        }

    });
}
module.exports = (access_token, package_name) => new Myket(access_token, package_name);