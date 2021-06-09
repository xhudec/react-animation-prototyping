const crypto = require('crypto')

const nonce = crypto.randomBytes(16).toString('base64')

module.exports = {
  env: {
    nonce,
  },
  images: {
    domains: ['place-puppy.com'],
  },
}
