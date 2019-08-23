'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const links = require('./routes/links')


const app = express()
app.enable('trust proxy')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/link/add/', links.add)
app.get('*', links.get)

module.exports = app

