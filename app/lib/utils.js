'use strict'

const config = require('../config')
const shortid = require('shortid')
shortid.seed(53724.3455)


exports.createShortLink = () =>
  `http://${config.HOST}:${config.PORT}/${shortid.generate()}`

exports.getShortLink = (req) =>
  `${req.protocol}://${req.hostname}:${config.PORT}${req.url}`

exports.promisify = (f) => {
  return function (...args) { // возвращает функцию-обёртку
    return new Promise((resolve, reject) => {
      function callback(err, result) { // наш специальный колбэк для f
        if (err) {
          return reject(err)
        }
        resolve(result)
      }

      args.push(callback) // добавляем колбэк в конец аргументов f

      f.call(this, ...args) // вызываем оригинальную функцию
    })
  }
}
