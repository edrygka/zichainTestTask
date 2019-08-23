'use strict'

const utils = require('../lib/utils')
const redis = require('../lib/redis')


exports.add = utils.asyncCatchErrors(async (req, res) => {
  const usersLink = req.body.usersLink

  //TODO: validation
  const matchingKeys = await redis.scan('*')
  for (let key of matchingKeys) {
    const longLink = await redis.get(key)
    if (longLink === usersLink) {
      throw new Error(`This link already exist as ${key}`)
    }
  }

  const shortLink = utils.createShortLink()
  await redis.set(shortLink, usersLink)

  res.json({link: shortLink})
})

exports.get = utils.asyncCatchErrors(async (req, res) => {
  const shortLink = utils.getShortLink(req)

  const usersLink = await redis.get(shortLink)

  res.redirect(usersLink)
})
