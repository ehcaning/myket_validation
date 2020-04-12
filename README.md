# Myekt Validation
A simple npm module for validate https://myket.ir/ payments

## Installation
This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).
Before installing, [download and install Node.js](https://nodejs.org/en/download/).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install myket_validation
```


## Instantiate module
```js
const myket = require('myket_validation')(access_token, package_name);
```


## Validate Payment
```js
let res = await myket.validate(sku, token);
```


Success Example:

```json
{
  "status": 200,
  "data": {
    "kind": "androidpublisher#productPurchase",
    "purchaseTime": 1586706741000,
    "developerPayload": "",
    "purchaseState": 0,
    "consumptionState": 1
  }
}
```

Error Example:
```json
{
  "status": 404,
  "data": {
    "code": 404,
    "messageCode": "SkuIdNotFound",
    "translatedMessage": "محصول درون برنامه ای یافت نشد"
  }
}
```