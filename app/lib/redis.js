'use strict'

const utils = require('./utils')
const redis = require('redis')
const client = redis.createClient()

const redisScan = require('node-redis-scan')
const scanner = new redisScan(client)

const set = utils.promisify(client.set).bind(client)
const get = utils.promisify(client.get).bind(client)
const scan = utils.promisify(scanner.scan).bind(scanner)
const flushdb = utils.promisify(client.flushdb).bind(client)


module.exports = {
  client: client,
  get: async key => await get(key),
  set: async (key, value) => await set(key, value),
  cleanDB: async () => await flushdb(),
  scan: async pattern => await scan(pattern)
}
