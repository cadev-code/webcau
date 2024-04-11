const path = require('path')

module.exports = {
  apps: [
    {
      name: 'server',
      script: './index.js',
      cwd: path.join(__dirname),
      watch: true
    }
  ]
}