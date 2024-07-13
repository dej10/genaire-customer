/* eslint-disable @typescript-eslint/no-var-requires */
const process = require('node:process')
const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  apps: [
    {
      name: 'example.com',
      exec_mode: 'cluster', // or fork 
      instances: 'max', // if for use '1'
      script: './.output/server/index.mjs',
      port: process.env.MAIN_NUXT_PORT
    },
    {
      name: 'staging.example.com',
      exec_mode: 'fork',
      instances: '1',
      script: './.output/server/index.mjs',
      port: process.env.STAG_NUXT_PORT
    }
  ]
}
