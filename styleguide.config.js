const path = require('path')

module.exports = {
  // set your styleguidist configuration here
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css'
        }
      ]
    }
  }
}
