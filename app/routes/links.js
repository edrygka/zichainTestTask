'use strict'

const utils = require('../lib/utils')
const redis = require('../lib/redis')


exports.add = async (req, res) => {
  const usersLink = req.body.usersLink

  //TODO: validation
  const matchingKeys = await redis.scan('*')
  console.log(matchingKeys)

  const shortLink = utils.createShortLink()
  await redis.set(shortLink, usersLink)

  res.send(shortLink)
}

exports.get = async (req, res) => {
  const shortLink = utils.getShortLink(req)

  const usersLink = await redis.get(shortLink)

  res.redirect(usersLink)
}
