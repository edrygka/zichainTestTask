'use strict'

const app = require('./app/index')
const config = require('./app/config')
const redis = require('./app/lib/redis')


const main = () => {
  app.listen(config.PORT, err => {
    if (err) {
      console.error(err)
    }

    console.log(`http://${config.HOST}:${config.PORT}/`)
  })
}

redis.client.on('error', err => {
  console.log('Redis went wrong ', err)
})

process.on('SIGINT', async () => {
  console.log('\nGracefully shutting down from SIGINT (Ctrl-C)')
  await redis.cleanDB()
  process.exit(1)
})


main()
